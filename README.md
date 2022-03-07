# tendermint-protobuf-def

This repository contains Protobuf definitions for the Tendermint Firehose integration. It creates the pb.go files and the Typescript files required

## Generate Code

To generate a new go package code from the protobuf definitions in the `output_codec` folder, execute:

```bash
make generate
```

This also adds the typescript files required for the [graph-ts](https://github.com/graphprotocol/graph-ts) Tendermint integration in the ts_files folder

## Protobuf formatting

```
clang-format '--style={BasedOnStyle: google, ColumnLimit: 130, IndentWidth: 2, SpacesBeforeTrailingComments: 1, AlignConsecutiveAssignments: true, AlignConsecutiveDeclarations: true}' < codec.proto
```
