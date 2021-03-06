# tendermint-protobuf-def

This repository contains Protobuf definitions for the Tendermint Firehose integration.

The GitHub workflow depends on `protoc` v3.20.0 and `protoc-gen-go` v1.27.1.

https://github.com/protocolbuffers/protobuf/releases/tag/v3.20.0

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.27.1
```
## proto file destination

The following 2 files are used to generate Go bindings:
- `sf/cosmos/type/v1/type.proto`
- `sf/cosmos/transform/v1/transform.proto`

The file in graph-ts are copied to graph-ts/chain/tendermint/proto/src/
- `graph-ts/chain/tendermint/proto/src/annotations.proto`
- `graph-ts/chain/tendermint/proto/src/cosmos.v1.proto`
- `graph-ts/chain/tendermint/proto/src/gogo.proto`
- `graph-ts/chain/tendermint/proto/src/liquidity.v1.proto`
- `graph-ts/chain/tendermint/proto/src/openapiv2.proto`
- `graph-ts/chain/tendermint/proto/src/t.v1.proto`

## Generating code

To generate Go bindings for the Protobuf definitions, execute:

```bash
make generate
```

## Protobuf formatting

```bash
make format
```
