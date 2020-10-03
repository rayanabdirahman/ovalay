import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import { SignUpModel } from '../../domain/interfaces'
import UserValidator from './user.validator'
import { UserService } from '../../service/user.service'
import logger from '../../utilities/logger'
import ApiResponse from '../../utilities/api-response'
import { ResponseHeaderEnum } from '../../domain/enums'

@injectable()
export default class UserController implements RegistrableController {
  private userService: UserService

  constructor(@inject(TYPES.UserService) userService: UserService) {
    this.userService = userService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/user/signup', this.signUp)
  }

  signUp = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: SignUpModel = {
        ...req.body
      }

      // validate request body
      const validity = UserValidator.signUp(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const token = await this.userService.signUp(model)

      // store token in authorisation header
      res.header(ResponseHeaderEnum.AUTHORIZATION, `Bearer ${token}`)

      return ApiResponse.success(res,  { token })

    } catch (error) {
      const { message } = error
      logger.error(`[UserController: signup] - Unable to signup user: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}
