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
  async createOne(model: SignUpModel): Promise<UserDocument> {
    const user = new User(model)
    return await user.save()
  }

  async findByEmail(email: string, safeguard: boolean = true): Promise<UserDocument | null> {
    // check if password should be returned with user document
    return safeguard ? await User.findOne({ email }).select('-password -__v') : await User.findOne({ email })
  }

  async findById(_id: string, safeguard: boolean = true): Promise<UserDocument | null> {
    // check if password should be returned with user document
    return safeguard ? await User.findById(_id).select('-password -__v') : await User.findById(_id)
  }
}