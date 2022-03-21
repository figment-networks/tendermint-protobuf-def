# in order to use local go packages we must change their names in the proto files
.PHONY: rename-tendermint-go-packages
rename-tendermint-go-packages:
	@sed 's:option go_package = "github.com/tendermint/tendermint/abci/types:option go_package = "github.com/figment-networks/tendermint-protobuf-def/tendermint/abci:' -i'' tendermint/**/*.proto
	@sed 's:option go_package = "github.com/tendermint/tendermint/proto/tendermint:option go_package = "github.com/figment-networks/tendermint-protobuf-def/tendermint:' -i'' tendermint/**/*.proto

.PHONY: generate-tendermint
generate-tendermint: rename-tendermint-go-packages
	@protoc \
	--go_out=paths=source_relative:./ \
	tendermint/**/*.proto

.PHONY: generate-codec
generate-codec:
	@mkdir -p ./codec
	@mkdir -p ./ts_files
	@protoc \
	-I "tendermint"\
		--ts_out=ts_files \
		--proto_path ./ \
		--go_out=paths=source_relative:./codec \
		codec.proto

.PHONY: generate
generate: generate-tendermint generate-codec
