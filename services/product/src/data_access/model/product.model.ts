import mongoose from 'mongoose'

export interface ProductDocument extends mongoose.Document {
  category: mongoose.Types.ObjectId
  owner: mongoose.Types.ObjectId
  brand: string
  title: string
  description: string
  photo: string
  price: number
  stockQuantity: number
  rating: [number]
}

const ProductSchema: mongoose.Schema = new mongoose.Schema({
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  owner: { type: mongoose.Types.ObjectId, ref: 'Owner' },
  brand: String,
  title: String,
  description: String,
  photo: String,
  price: Number,
  stockQuantity: Number,
  rating: [Number],
})

export default mongoose.model<ProductDocument>('Product', ProductSchema)