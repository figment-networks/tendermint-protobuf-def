.PHONY: generate
generate:
	@mkdir -p ./codec
	@protoc \
	-I "proto"\
		--proto_path=./ \
		--go_out=paths=source_relative:./codec \
		codec.proto
