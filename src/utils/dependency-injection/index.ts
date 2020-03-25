import { Container } from 'inversify'

import GrpcUserService from '@app/grpc/user/user-service'

const container = new Container()

container.bind<GrpcUserService>(GrpcUserService).toSelf()

export default container