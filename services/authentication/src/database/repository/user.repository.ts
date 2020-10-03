import { injectable } from 'inversify'
import User, { UserDocument } from '../model/user.model'
import { SignUpModel } from '../../domain/interfaces'

export interface UserRepository {
  createOne(model: SignUpModel): Promise<UserDocument>
  findByEmail(email: string, safeguard?: boolean): Promise<UserDocument | null>
  findById(_id: string, safeguard?: boolean): Promise<UserDocument | null>
}

@injectable()
export class UserRepositoryImpl implements UserRepository {
  /**
   * Create a single user
   * @param { SignUpModel } model - stores information needed to created a new user
   */
  async createOne(model: SignUpModel): Promise<UserDocument> {
    const user = new User(model)
    return await user.save()
  }

  /**
   * Find user by email
   * @param { string } email - stores user email
   * @param { boolean } safeguard - returns user password when set false
   */
  async findByEmail(email: string, safeguard: boolean = true): Promise<UserDocument | null> {
    // check if password should be returned with user document
    return safeguard ? await User.findOne({ email }).select('-password -__v') : await User.findOne({ email })
  }

  /**
   * Find user by id
   * @param { string } _id - stores user id
   * @param { boolean } safeguard - returns user password when set false
   */
  async findById(_id: string, safeguard: boolean = true): Promise<UserDocument | null> {
    // check if password should be returned with user document
    return safeguard ? await User.findById(_id).select('-password -__v') : await User.findById(_id)
  }
}
