import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import logger from '../../util/logger'
import ApiResponse from '../../util/api-response'
import { CreateOwner} from '../../domain/interfaces'
import OwnerValidator from './owner.validator'
import { OwnerService } from '../../service/owner.service'
import MulterUpload from '../../middleware/multer.middleware'

@injectable()
export default class OwnerController implements RegistrableController {
  private ownerService: OwnerService

  constructor(@inject(TYPES.OwnerService) ownerService: OwnerService) {
    this.ownerService = ownerService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/owner/', MulterUpload.single('photo'), this.createOne)
    app.get('/api/owner/', this.findAll)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateOwner = {
        ...req.body,
        // @ts-ignore
        photo: req.file ? req.file.location : null
      }

      // validate request body
      const validity = OwnerValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const owner = await this.ownerService.createOne(model)
      
      return ApiResponse.success(res,  owner)
    } catch (error) {
      const { message } = error
      logger.error(`[OwnerController: createOne] - Unable to create owner: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const owner = await this.ownerService.findAll()
      return ApiResponse.success(res,  owner)
    } catch (error) {
      const { message } = error
      logger.error(`[OwnerController: findAll] - Unable to find owners: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}