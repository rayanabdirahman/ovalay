import { UserRolesEnum } from "./enums"

export interface UserModel {
  _id: string,
  email: string,
  name: string,
  username: string,
  role: UserRolesEnum[]
}

export interface SignUpModel {
  username: string
  name: string
  email: string
  password: string
  role?: UserRolesEnum
}

export interface SignInModel {
  email: string
  password: string
}

export type ApiSuccessDataResponse = {
  token: string
  user: UserModel
}

export type ApiSuccessResponse = {
  status: string
  code: number
  data: ApiSuccessDataResponse
}

// product interfaces
export type ProductModel = {
  _id: string
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

export type CreateProductModel = {
  name: string
  price: string
  color: string
  type: string
  brand: string
  description: string
  image: string
  sellerId: string
  availableStockQuantity: number
}