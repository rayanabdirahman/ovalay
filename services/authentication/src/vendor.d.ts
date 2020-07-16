import { JwtUserPayload } from './domain/interfaces'

declare global {
  namespace Express {
    interface Request {
      user?: JwtUserPayload 
    }
  }
}