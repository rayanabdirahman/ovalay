export type RootStackParamList = {
  Root: undefined
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

// Route names
export enum RootStackRouteName {
  ROOT = 'Root',
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
