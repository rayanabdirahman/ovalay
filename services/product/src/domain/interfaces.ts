import { UserRolesEnum } from "./enums";

export interface CreateProductModel {
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

export interface JwtUserPayload {
  _id: string | object
  username: string
  name: string
  email: string
  role: UserRolesEnum
}

export interface JwtPayload {
  user: JwtUserPayload
}
