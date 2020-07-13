export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: object | null
}