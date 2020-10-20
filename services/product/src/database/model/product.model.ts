import mongoose from 'mongoose'
import { ProductDocument } from '../interfaces'

const ProductSchema: mongoose.Schema = new mongoose.Schema({
  name: { type: String, required: true},
  price: { type: String, required: true},
  color: { type: String, required: true},
  type: { type: String, required: true},
  brand: { type: String, required: true},
  description: { type: String, required: true},
  image: { type: [String], required: true },
  availableStockQuantity: { type: Number, required: true},
  sellerId: { type: String, required: true},
  createdAt: { type: Date, default: Date.now } 
})

export default mongoose.model<ProductDocument>('Product', ProductSchema)
