import { injectable, inject } from 'inversify'
import { SignUpModel, LoginModel } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { UserRepository } from '../data_access/repository/user.repository'
import JwtHelper from '../util/jwt-helper'
import BycryptHelper from '../util/bcrypt-helper'

export interface UserService {
  signUp(model: SignUpModel): Promise<string>
  login(model: LoginModel): Promise<string>
}

@injectable()
export class UserServiceImpl implements UserService {
  private userRepository: UserRepository

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  private async isEmailTaken(email: string): Promise<boolean> {
    return await this.userRepository.findByEmail(email) ? Promise.resolve(true) : Promise.resolve(false)
  }

  async signUp(model: SignUpModel): Promise<string> { 
    try {
      // check if user email is taken
      if (await this.isEmailTaken(model.email)) {
        throw new Error('A user with this email address already exists')
      }

      const user = await this.userRepository.createOne(model)

      // sign JWT token
      return await JwtHelper.sign(user)

    } catch(error) {
      logger.error(`[UserService: signUp]: Unabled to create user: ${error}`)
      throw error
    }
  }

  async login(model: LoginModel): Promise<string> { 
    try {
      // find user by email address
      const user = await this.userRepository.findByEmail(model.email, false)
      if (!user) {
        throw new Error('Invalid credentials')
      }

      // check if passwords match
      const doPasswordsMatch = await BycryptHelper.comparePassword(model.password, user.password)
      if (!doPasswordsMatch) {
        throw new Error('Invalid credentials')
      }

      // sign JWT token
      return await JwtHelper.sign(user)

    } catch(error) {
      logger.error(`[UserService: login]: Unabled to login user: ${error}`)
      throw error
    }
  }
}