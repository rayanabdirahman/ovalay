// Api response interfaces
export type ApiSuccessResponse = {
  status: string
  code: number
  data: ApiSuccessDataResponse
}

export type ApiSuccessDataResponse = {
  token: string
  user: User
  product: Product
  products: Product[]
}

export type ApiErrorResponse = {
  status: string
  code: number
  error: string
}

export type User = {
  _id: string
  username: string
  firstName: string
  lastName: string
  email: string
}

export type SignUpModel = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type LoginModel = {
  email: string;
  password: string;
}

// product
export type Product = {
  _id: string
  category: string
  owner: string
  brand: string
  title: string
  description: string
  photo: string
  price: number
  stockQuantity: number
  rating?: [number]
}