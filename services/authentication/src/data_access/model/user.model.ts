import mongoose from 'mongoose'
import BycryptHelper from '../../util/bcrypt-helper'

export interface UserDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  username: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true }
})

UserSchema.pre('save', async function(done) {
  if(this.isModified('password')) {
    // hash user password
    const password = await BycryptHelper.encryptPassword(this.get('password'))
    this.set({ password })
  }

  done()
})

export default mongoose.model<UserDocument>('User', UserSchema)