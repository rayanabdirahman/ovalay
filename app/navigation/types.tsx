export type RootStackParamList = {
  Root: undefined
  ShareModal: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Feed: undefined;
  Search: undefined;
  Share?: undefined
  Cart: undefined
  Profile: undefined
}

export type FeedParamList = {
  FeedScreen: undefined
}

export type SearchParamList = {
  SearchScreen: undefined
}

export type ShareParamList = {
  ShareScreen: undefined
}

// Route names
export enum RootStackRouteName {
  ROOT = 'Root',
  SHARE_MODAL = 'ShareModal'
}

export enum BottomTabRouteName {
  FEED = 'Feed',
  SEARCH = 'Search',
  SHARE = 'Share',
  CART = 'Cart',
  PROFILE = 'Profile'
}

export enum FeedTabRouteName {
  FEED_SCREEN = 'FeedScreen',
}

export enum SearchTabRouteName {
  SEARCH_SCREEN = 'SearchScreen',
}

export enum ShareTabRouteName {
  SHARE_SCREEN = 'ShareScreen',
}
