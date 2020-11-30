import { UserRolesEnum } from "../domain/enums"

export type AuthStackParamList = {
  Landing: undefined
  SignIn: undefined
  SignUp: undefined | { userRole?: UserRolesEnum }
}

export type RootStackParamList = {
  Root: undefined
  CreateModal: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Feed: undefined;
  Search: undefined;
  Create?: undefined
  Cart: undefined
  Profile: undefined
}

export type FeedParamList = {
  FeedScreen: undefined
}

export type SearchParamList = {
  SearchScreen: undefined
}

export type CreateParamList = {
  CreateScreen: undefined
}

export type ProfileParamList = {
  ProfileScreen: undefined
  ProductScreen: { productId: string }
}

// Route names
export enum AuthScreenName {
  LANDING = 'Landing',
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

export enum RootStackRouteName {
  ROOT = 'Root',
  CREATE_MODAL = 'CreateModal'
}

export enum BottomTabRouteName {
  FEED = 'Feed',
  SEARCH = 'Search',
  CREATE = 'Create',
  CART = 'Cart',
  PROFILE = 'Profile'
}

export enum FeedTabRouteName {
  FEED_SCREEN = 'FeedScreen',
}

export enum SearchTabRouteName {
  SEARCH_SCREEN = 'SearchScreen',
}

export enum CreateTabRouteName {
  CREATE_SCREEN = 'CreateScreen',
}

export enum ProfileTabRouteName {
  PROFILE_SCREEN = 'ProfileScreen',
  PRODUCT_SCREEN = 'ProductScreen',
}
