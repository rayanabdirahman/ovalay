import { injectable, inject } from 'inversify'
import { UserDocument } from '../database/model/user.model'
import { UserRepository } from '../database/repository/user.repository'
import { SignUpModel } from '../domain/interfaces'
import TYPES from '../types'
import logger from '../utilities/logger'

export interface UserService {
  signUp(model: SignUpModel): Promise<UserDocument | null>
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

  async signUp(model: SignUpModel): Promise<UserDocument | null> {
    try {
      // check if user email is taken
      if (await this.isEmailTaken(model.email)) {
        throw new Error('A user with this email address already exists')
      }

      const user = await this.userRepository.createOne(model)

      return user

    } catch(error) {
      logger.error(`[UserService: signUp]: Unabled to create user: ${error}`)
      throw error
    }
  }
}
