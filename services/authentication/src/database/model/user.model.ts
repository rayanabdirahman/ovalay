import mongoose from 'mongoose'
import { UserRolesEnum } from '../../domain/enums'
import BycryptHelper from '../../utilities/bcrypt-helper'

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

// Encrypt user password before saving
UserSchema.pre('save', async function(done) {
  if(this.isModified('password')) {
    // hash user password
    const password = await BycryptHelper.encryptPassword(this.get('password'))
    this.set({ password })
  }

  done()
})

export default mongoose.model<UserDocument>('User', UserSchema)
