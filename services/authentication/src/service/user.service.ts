import { injectable, inject } from 'inversify'
import { UserRepository } from '../database/repository/user.repository'
import { SignInModel, SignUpModel } from '../domain/interfaces'
import TYPES from '../types'
import BycryptHelper from '../utilities/bcrypt-helper'
import JwtHelper from '../utilities/jwt-helper'
import logger from '../utilities/logger'

export interface UserService {
  signUp(model: SignUpModel): Promise<string>
  signIn(model: SignInModel): Promise<string>
}

@injectable()
export class UserServiceImpl implements UserService {
  private userRepository: UserRepository

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  /**
   * Check if user email exists
   * @param { string } email - stores user email
   */
  private async isEmailTaken(email: string): Promise<boolean> {
    return await this.userRepository.findByEmail(email) ? Promise.resolve(true) : Promise.resolve(false)
  }

  /**
   * Create a single user
   * @param { SignUpModel } model - stores information needed to created a new user
   */
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

  /**
   * Find user using sign in details
   * @param { SignInModel } model - stores information needed to sign user in
   */
  async signIn(model: SignInModel): Promise<string> { 
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
      logger.error(`[UserService: signIn]: Unabled to sign in user: ${error}`)
      throw error
    }
  }
}
