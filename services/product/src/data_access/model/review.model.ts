import mongoose from 'mongoose'

export interface ReviewDocument extends mongoose.Document {
  body: string
  photo: string
  rating: number
  user: mongoose.Types.ObjectId
  product: mongoose.Types.ObjectId
}

const ReviewSchema: mongoose.Schema = new mongoose.Schema({
  body: String,
  photo: String,
  rating: Number,
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Types.ObjectId, ref: 'Product' }
})

export default mongoose.model<ReviewDocument>('Review', ReviewSchema)