import express from 'express'
import logger from './util/logger'
import { RegistrableController } from './api/registrable.controller'
import container from './inversify.config'
import TYPES from './types'
import ApiResponse from './util/api-response'

export default async (): Promise<express.Application> => (
  new Promise<express.Application>(async (resolve, reject) => {
    try {
      const app = express()

      // set middleware
      app.use(express.json())
      app.use(express.urlencoded({ extended: false }))

      // register api routes
      const controllers: RegistrableController[] = container.getAll<RegistrableController>(TYPES.Controller)
      controllers.forEach(controller => controller.registerRoutes(app))

      // test api route
      app.get('/api/user/', async (req: express.Request, res: express.Response): Promise<express.Response> => {
        return res.json({ 'Stickatag Authentication API': 'Version 1' })
      })

      resolve(app)

    } catch(error) {
      logger.error(`Error when bootstrapping app: ${error}`)
      reject(error)
    }
  })
)