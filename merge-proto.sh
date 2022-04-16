#! /bin/bash

GREEN='\e[0;32m'
YELLOW='\e[1;33m'
RESET='\e[0m'
RED='\e[1;31m'
BLUE='\e[0;34m'

: ${TMP_DIR:="./tmp"}
: ${DST_FILE:="./generated/fig/tendermint/codec/v1/codec.proto"}

log_green () {
   echo -e "${GREEN}$@${RESET}"
}

log_blue () {
    echo -e "${BLUE}$@${RESET}"
}

log_yellow () {
   echo -e "${YELLOW}$@${RESET}"
}

log_red () {
    echo -e "${RED}$@${RESET}"
}

declare -a processed_files
declare -a packages_list

function echo_headers() {

    echo "syntax = \"proto3\";"
    echo "package tendermint;"
    echo "option go_package = \"github.com/figment-networks/tendermint-protobuf-def/pb/tendermint;pbcodec\";"
    echo
    echo "import \"gogoproto/gogo.proto\";"
    echo "import \"google/protobuf/descriptor.proto\";"
    echo "import \"google/protobuf/any.proto\";"
    echo
}

function echo_file() {
    local package=$(egrep '^package' ${TMP_DIR}/$1 | sort -r | awk '{ print $2}' | sed -e 's/;$//')
    if [[ ! " ${packages_list[*]} " =~ " ${package} " ]]; then
        packages_list+=(${package})
    fi

    echo  >> ${DST_FILE}
    echo "//------------------------------------------------------------------------"  >> ${DST_FILE}
    echo "// imported from $1" >> ${DST_FILE}
    echo "//"  >> ${DST_FILE}
    cat ${TMP_DIR}/$1 | egrep -v '^syntax|^package|^import|^option|^//' >> ${DST_FILE}
}

function process_file() {
    local file=${1}

    if [ ! -f ${TMP_DIR}/${file} ]; then
        log_red File ${file} not found
        processed_files+=(${file})
        return
    fi

    log_green Processing file - ${file}
    imports=$(egrep '^import' ${TMP_DIR}/${file} | sort -r | awk '{ print $2}' | sed -e 's/;$//;s/\"//g')
    for import in ${imports}; do
        if [[ ! " ${processed_files[*]} " =~ " ${import} " ]]; then
            log_green Processing new import - ${import} for ${file}
            process_file ${import}
        else
            log_yellow File already processed - ${import}
        fi
    done
    echo_file ${file}
    processed_files+=(${file})
}

function flatten() {
    echo_headers > ${DST_FILE}

    for file in $@; do
        echo
        log_blue Flattening ${file}
        process_file ${file}
    done

    echo
    log_blue Fixing package reference
    for package in ${packages_list[@]}; do
        log_green Removing reference to package - ${package}
        sed -i -e "s/${package}\.//g" ${DST_FILE}
    done
}

rm -rf ${TMP_DIR}
mkdir -p ${TMP_DIR}

mkdir -p $(dirname ${DST_FILE})

cp -r ./fig/ ${TMP_DIR}/
cp -r ./third_party/cosmos* ./third_party/protoc-gen* ${TMP_DIR}

flatten $@

rm -rf ${TMP_DIR}
clang-format -i --style=file ${DST_FILE}
