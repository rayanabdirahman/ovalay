import mongoose from 'mongoose'

export interface CategoryDocument extends mongoose.Document {
  type: string
}

const CategorySchema: mongoose.Schema = new mongoose.Schema({
  type: { type: String, unique: true, required: true }
})

export default mongoose.model<CategoryDocument>('Category', CategorySchema)