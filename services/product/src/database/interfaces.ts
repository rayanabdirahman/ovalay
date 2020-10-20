import mongoose from 'mongoose'
import { UserRolesEnum } from "../domain/enums";

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

export interface ProductDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId
  name: string
  price: string
  color: string
  type: string
  brand: string
  description: string
  image: string[]
  availableStockQuantity: number
  sellerId: string
  createdAt: Date
}

