import { ProductModel } from "../domain/interfaces"

export type NavigationState = {
  currentLocation: string | null
  referrer: string | null
  isUserSignedIn: boolean
  hasRendered: boolean
}

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: { _id: string } | null
}

export type ProductState = {
  products: ProductModel[],
  product: ProductModel,
  error: null,
  loading: boolean
}