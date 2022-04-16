.PHONY: all generate format

all: generate format

generate:
	@mkdir -p ./pb
	@./merge-proto.sh \
		fig/tendermint/codec/v1/codec.proto \
		fig/tendermint/transform/v1/transform.proto \
		fig/tendermint/liquidity/v1/liquidity.proto
	@protoc \
		--proto_path ./generated \
		--proto_path ./third_party \
		--go_out=paths=source_relative:./pb \
		./generated/fig/tendermint/codec/v1/codec.proto
	@DST_FILE=./generated/graph-ts/tendermint.proto ./merge-proto.sh \
		fig/tendermint/codec/v1/codec.proto

format:
	@clang-format -i --style=file \
		./fig/tendermint/*/*/*.proto \
		./generated/fig/tendermint/codec/v1/codec.proto \
		./generated/graph-ts/tendermint.proto
