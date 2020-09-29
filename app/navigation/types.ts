export type AuthStackParamList = {
  Landing: undefined
  SignIn: undefined
  SignUp: undefined
}

export enum AuthScreenName {
  LANDING = 'Landing',
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

export type RootStackParamList = {
  Root: undefined
  Feed: undefined
  Search: undefined
  Cart: undefined
  Profile: undefined
  Store: undefined
}

export enum RootScreenName {
  ROOT = 'Root',
  FEED = 'Feed',
  SEARCH = 'Search',
  CART = 'Cart',
  PROFILE = 'Profile',
  STORE = 'Store'
}