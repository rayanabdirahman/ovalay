import { User } from '../api/types'

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: User | null
}