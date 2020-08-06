import mongoose from 'mongoose'

export interface CategoryDocument extends mongoose.Document {
  title: string
}

const CategorySchema: mongoose.Schema = new mongoose.Schema({
  title: String
})

export default mongoose.model<CategoryDocument>('Category', CategorySchema)