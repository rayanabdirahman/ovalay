import { User, Product } from '../api/types'

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: User | null
}

export type ProductState = {
  loading: boolean,
  product: Product | null
  products: Product[] | null
}