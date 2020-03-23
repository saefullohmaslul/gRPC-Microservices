#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./src/protoc

mkdir -p ${PROTO_DEST}

for file in ./protos/*.proto
do
  FILE="$(basename -s .proto $file)"
  
  mkdir -p ./src/protoc/$FILE
  
  npx protoc-gen-grpc \
  --js_out=import_style=commonjs,binary:${PROTO_DEST}/${FILE} \
  --grpc_out=${PROTO_DEST}/${FILE} \
  --proto_path ./protos \
  $file

  npx protoc-gen-grpc-ts \
  --ts_out=service=true:${PROTO_DEST}/${FILE} \
  --proto_path ./protos \
  $file

done

echo "Success generated proto file"