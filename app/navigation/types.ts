// screen names must match param list object keys
export enum RootNavigationScreenName {
  ROOT = 'Root',
  MODAL = 'Modal',
  FEED = 'Feed',
  SEARCH = 'Search',
  WISH_LIST = 'Wishlist',
  PROFILE = 'Profile'
}

// screen names must match param list object keys
export enum AuthNavigationScreenName {
  LOGIN = 'Login',
  SIGN_UP = 'SignUp'
}

export type AuthStackParamList = {
  Login: undefined
  SignUp: undefined
}

export type RootStackParamList = {
  Root: undefined
  Modal: undefined
  Feed: undefined
  Search: undefined
  Wishlist: undefined
  Profile: undefined
}