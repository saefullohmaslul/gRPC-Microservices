import debug from 'debug'
import grpc from 'grpc'

import { UserServiceService } from '../../protoc/user/user_grpc_pb'
import { User, NewUser, Result, UserId } from '../../protoc/user/user_pb'

const log = debug('server')

class UserServer {
  show(call: grpc.ServerUnaryCall<UserId>, callback: grpc.sendUnaryData<User>) {
    const user = new User()

    callback(null, user)
  }

  store(call: grpc.ServerUnaryCall<NewUser>, callback: grpc.sendUnaryData<Result>) {
    const result = new Result()

    result.setStatus(true)

    callback(null, result)
  }
}

export const startUserServer = () => {
  const server = new grpc.Server()

  server.addService(UserServiceService, new UserServer())
  server.bind('0.0.0.0:3001', grpc.ServerCredentials.createInsecure())
  server.start()

  log('UserService gRPC started, listening: 127.0.0.1:3001')
}