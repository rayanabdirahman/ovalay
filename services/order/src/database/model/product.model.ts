import mongoose from 'mongoose'
import { ProductDocument } from '../interfaces'

const ProductSchema: mongoose.Schema = new mongoose.Schema({
  name: { type: String, required: true},
  price: { type: String, required: true}
})

export default mongoose.model<ProductDocument>('Product', ProductSchema)
