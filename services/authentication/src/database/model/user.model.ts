import mongoose from 'mongoose'
import { UserRolesEnum } from '../../domain/enums'

export interface UserDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId
  username: string
  name: string
  email: string
  avatar: string
  password: string
  role: UserRolesEnum
  createdAt: Date
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  username: { type: String, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  avatar: { type: String },
  password: { type: String, required: true },
  role: { 
    type: [{
      type: String, 
      enum: [UserRolesEnum.BUYER, UserRolesEnum.SELLER]
    }],
    default: UserRolesEnum.BUYER
  },
  createdAt: { type: Date, default: Date.now } 
})

export default mongoose.model<UserDocument>('User', UserSchema)
