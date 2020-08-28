// screen names must match param list object keys
export enum RootNavigationScreenName {
  ROOT = 'Root',
  MODAL = 'Modal',
  FEED = 'Feed',
  SEARCH = 'Search',
  PROFILE = 'Profile',
  SEARCH_MODAL = 'SearchModal'
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
  Profile: undefined
  SearchModal: undefined
}