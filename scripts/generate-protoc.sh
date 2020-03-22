#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./src/protoc

mkdir -p ${PROTO_DEST}

npx protoc-gen-grpc \
--js_out=import_style=commonjs,binary:${PROTO_DEST} \
--grpc_out=${PROTO_DEST} \
--proto_path ./protos \
./protos/*.proto

npx protoc-gen-grpc-ts \
--ts_out=service=true:${PROTO_DEST} \
--proto_path ./protos \
./protos/*.proto

echo "Success generated proto file"