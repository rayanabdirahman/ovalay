import mongoose from 'mongoose'

export interface CreateNewProductModel {
  category?: mongoose.Types.ObjectId
  owner?: mongoose.Types.ObjectId
  brand: string
  title: string
  description: string
  photo: string
  price: number
  stockQuantity: number
  rating: [number]
}

export interface CreateCategory {
  type: string
}

export interface CreateOwner {
  name: string,
  about: string,
  photo: string
}
export interface CreateReview {
  body: string
  photo: string
  rating?: number
  user?: mongoose.Types.ObjectId
  product?: mongoose.Types.ObjectId
}

export interface Product {
  _id: string
  brand: string
  name: string
  description: string
  image: string
  owner_id: string // reference user _id
  quantity: number
  price: number
  created_at: Date
}