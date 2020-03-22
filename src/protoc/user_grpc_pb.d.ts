// package: user
// file: user.proto

import * as grpc from 'grpc';
import * as user_pb from './user_pb';

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  show: Ishow
  store: Istore
}

interface Ishow {
  path: string; // "/user.UserService/show"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: user_pb.UserId;
  responseType: user_pb.User;
  requestSerialize: (arg: user_pb.UserId) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => user_pb.UserId;
  responseSerialize: (arg: user_pb.User) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => user_pb.User;
}

interface Istore {
  path: string; // "/user.UserService/store"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: user_pb.NewUser;
  responseType: user_pb.Result;
  requestSerialize: (arg: user_pb.NewUser) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => user_pb.NewUser;
  responseSerialize: (arg: user_pb.Result) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => user_pb.Result;
}

export interface IUserServiceClient {
  show(request: user_pb.UserId, callback: (error: Error | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
  show(request: user_pb.UserId, metadata: grpc.Metadata, callback: (error: Error | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
  store(request: user_pb.NewUser, callback: (error: Error | null, response: user_pb.Result) => void): grpc.ClientUnaryCall;
  store(request: user_pb.NewUser, metadata: grpc.Metadata, callback: (error: Error | null, response: user_pb.Result) => void): grpc.ClientUnaryCall;
}

export const UserServiceService: IUserServiceService;
export class UserServiceClient extends grpc.Client implements IUserServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public show(request: user_pb.UserId, callback: (error: Error | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
  public show(request: user_pb.UserId, metadata: grpc.Metadata, callback: (error: Error | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
  public store(request: user_pb.NewUser, callback: (error: Error | null, response: user_pb.Result) => void): grpc.ClientUnaryCall;
  public store(request: user_pb.NewUser, metadata: grpc.Metadata, callback: (error: Error | null, response: user_pb.Result) => void): grpc.ClientUnaryCall;
}

