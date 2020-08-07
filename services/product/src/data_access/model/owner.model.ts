import mongoose from 'mongoose'

export interface OwnerDocument extends mongoose.Document {
  name: string,
  about: string,
  photo: string
}

const OwnerSchema: mongoose.Schema = new mongoose.Schema({
  name: String,
  about: String,
  photo: String
})

export default mongoose.model<OwnerDocument>('Owner', OwnerSchema)