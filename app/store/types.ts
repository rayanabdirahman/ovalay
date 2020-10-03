export type NavigationState = {
  currentLocation: string | null
  referrer: string | null
  isSignedIn: boolean
  hasRendered: boolean
}

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: { _id: string } | null
}
