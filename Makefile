.PHONY: generate
generate:
	@mkdir -p ./codec
	@mkdir -p ./ts_files
	@protoc \
		--ts_out=ts_files \
		--proto_path ./ \
		--go_out=paths=source_relative:./codec \
		*.proto
