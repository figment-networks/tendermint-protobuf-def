.PHONY: all generate format

all: generate format

generate:
	@mkdir -p ./pb
	@protoc \
		--proto_path ./ \
		--proto_path ./third_party \
		--go_out=paths=source_relative:./pb \
		./fig/tendermint/*/*/codec.proto
format:
	@clang-format -i --style=file \
		./fig/tendermint/*/*/*.proto
