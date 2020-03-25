import 'module-alias/register'
import 'reflect-metadata'

import GrpcUserServer from '@app/grpc/user'
import container from './utils/dependency-injection'

const gRPCUserCServer = container.resolve(GrpcUserServer)

gRPCUserCServer.initialize()