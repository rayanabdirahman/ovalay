import jwt from 'jsonwebtoken'
import { UserDocument } from '../database/model/user.model'
import logger from './logger'
import { JwtPayload } from '../domain/interfaces'

interface IJwtHelper {
  sign(user: UserDocument): Promise<string>
  decode(token: string): Promise<JwtPayload>
}

const JwtHelper: IJwtHelper = {
  async sign(user: UserDocument): Promise<string> {
    const payload: JwtPayload = {
      user: { 
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
      }
    }

    return await jwt.sign(payload, `${process.env.JWT_SECRET}`, {expiresIn: `300000000000000000000`})
  },

  async decode(token: string): Promise<JwtPayload> {
    try {
      return await jwt.verify(token, `${process.env.JWT_SECRET}`) as JwtPayload
    } catch (error) {
      const { message } = error
      logger.error(`[JwtHelper] - Unable to decode user token: ${message}`)
      throw message
    }
  }
}

export default JwtHelper
