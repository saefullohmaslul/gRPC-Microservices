import grpc from 'grpc'

import { User, NewUser, Result, UserId } from '../../protoc/user/user_pb'
import { injectable } from 'inversify'

@injectable()
export default class GrpcUserService {
  public show(
    call: grpc.ServerUnaryCall<UserId>,
    cb: grpc.sendUnaryData<User>
  ) {
    try {
      const user = new User()

      cb(null, user)
    } catch (error) {
      cb(error, null)
    }
  }

  public store(
    call: grpc.ServerUnaryCall<NewUser>,
    cb: grpc.sendUnaryData<Result>
  ) {
    try {
      const result = new Result()

      result.setStatus(true)

      cb(null, result)
    } catch (error) {
      cb(error, null)
    }
  }
}