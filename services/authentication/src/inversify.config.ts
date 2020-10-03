import 'reflect-metadata'
import { Container } from 'inversify'
import TYPES from './types'
import { UserRepository, UserRepositoryImpl } from './database/repository/user.repository'

const container = new Container()

// repository
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl)

export default container