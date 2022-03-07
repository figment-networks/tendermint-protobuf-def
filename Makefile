.PHONY: generate
generate:
	@mkdir -p ./output_codec
	@mkdir -p ./ts_files
	@protoc \
	-I "tendermint"\
		--ts_out=ts_files \
		--proto_path ./ \
		--go_out=paths=source_relative:./output_codec \
		codec.proto
