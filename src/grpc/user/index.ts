import grpc from 'grpc'
import { UserServiceService } from '@app/protoc/user/user_grpc_pb'
import GrpcUserService from './user-service'
import { logger } from '@app/library'
import { injectable, inject } from 'inversify'

@injectable()
export default class GrpcUserServer {
  private server: grpc.Server
  constructor(
    @inject(GrpcUserService) gRPCUserService: GrpcUserService
  ) {
    this.server = new grpc.Server()
    this.server.addService(UserServiceService, gRPCUserService)
  }

  public initialize() {
    this.server.bind('0.0.0.0:3001', grpc.ServerCredentials.createInsecure())
    this.server.start()
    logger.log('gRPC UserService started, listening: localhost:3001')
  }
}