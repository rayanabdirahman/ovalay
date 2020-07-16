import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import { SignUpModel, JwtUserPayload, LoginModel } from '../../domain/interfaces'
import UserValidator from './user.validator'
import ApiResponse from '../../util/api-response'
import logger from '../../util/logger'
import { UserService } from '../../service/user.service'
import AuthGuard from '../../middleware/auth-guard'
import { ResponseHeaderEnum } from '../../domain/enums'

@injectable()
export default class UserController implements RegistrableController {
  private userService: UserService

  constructor(@inject(TYPES.UserService) userService: UserService) {
    this.userService = userService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/user/', this.signUp)
    app.post('/api/user/login', this.login)
    app.post('/api/user/logout', this.logout)
    app.get('/api/user/authorise', AuthGuard, this.authorise)
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
      res.header(ResponseHeaderEnum.AUTHORISATION, `Bearer ${token}`)

      return ApiResponse.success(res,  { token })

    } catch (error) {
      const { message } = error
      logger.error(`[UserController: signup] - Unable to signup user: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  login = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: LoginModel = {
        ...req.body
      }

      // validate request body
      const validity = UserValidator.login(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      // generate JWT token
      const token = await this.userService.login(model)

      // store token in authorisation header
      res.header(ResponseHeaderEnum.AUTHORISATION, `Bearer ${token}`)

      return ApiResponse.success(res,  { token })

    } catch (error) {
      const { message } = error
      logger.error(`[UserController: login] - Unable to login user: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  logout = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      // remove authorisation header
      delete req.headers[ResponseHeaderEnum.AUTHORISATION]

      return ApiResponse.success(res, 'Successfully logged user out')

    } catch (error) {
      const { message } = error;
      logger.error(`[UserController: logout] - Unable to logout user: ${message}`);
      return ApiResponse.error(res, message);
    }
  }

  private authorise = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: JwtUserPayload | undefined = req.user

      // return authenticated user
      const user = model

      return ApiResponse.success(res, { user })

    } catch (error) {
      const { message } = error
      logger.error(`[UserController: authorise] - Unable to authorise user: ${message}`)
      return ApiResponse.error(res, error)
    }
  }
}