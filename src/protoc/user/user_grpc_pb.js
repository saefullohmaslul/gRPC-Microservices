// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_NewUser(arg) {
  if (!(arg instanceof user_pb.NewUser)) {
    throw new Error('Expected argument of type user.NewUser');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_NewUser(buffer_arg) {
  return user_pb.NewUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Result(arg) {
  if (!(arg instanceof user_pb.Result)) {
    throw new Error('Expected argument of type user.Result');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_Result(buffer_arg) {
  return user_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserId(arg) {
  if (!(arg instanceof user_pb.UserId)) {
    throw new Error('Expected argument of type user.UserId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_UserId(buffer_arg) {
  return user_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  show: {
    path: '/user.UserService/show',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserId,
    responseType: user_pb.User,
    requestSerialize: serialize_user_UserId,
    requestDeserialize: deserialize_user_UserId,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  store: {
    path: '/user.UserService/store',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.NewUser,
    responseType: user_pb.Result,
    requestSerialize: serialize_user_NewUser,
    requestDeserialize: deserialize_user_NewUser,
    responseSerialize: serialize_user_Result,
    responseDeserialize: deserialize_user_Result,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
