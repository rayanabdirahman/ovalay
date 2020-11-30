import { UserRolesEnum } from "../domain/enums"
import { ProductModel, UserModel } from "../domain/interfaces"

export type NavigationState = {
  currentLocation: string | null
  referrer: string | null
  isUserSignedIn: boolean
  userRole: UserRolesEnum[] | null
  hasRendered: boolean
}

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: UserModel | null
}

export type ProductState = {
  products: ProductModel[],
  product: ProductModel,
  error: null,
  loading: boolean
}
