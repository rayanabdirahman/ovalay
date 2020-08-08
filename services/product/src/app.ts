import express from 'express'
import logger from './util/logger'
import { RegistrableController } from './api/registrable.controller'
import container from './inversify.config'
import TYPES from './types'

export default async (): Promise<express.Application> => (
  new Promise<express.Application>(async (resolve, reject) => {
    try {
      const app = express()

      // check if env variables have been set
      if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be defined')
      if (!process.env.AWS_S3_PRODUCT_PHOTOS_BUCKET) throw new Error('AWS_S3_PRODUCT_PHOTOS_BUCKET must be defined')
      if (!process.env.AWS_ACCESS_KEY_ID) throw new Error('AWS_ACCESS_KEY_ID must be defined')
      if (!process.env.AWS_SECRET_ACCESS_KEY) throw new Error('AWS_SECRET_ACCESS_KEY must be defined')
      
      // TODO: add a check to ensure JWT secret has been set in process.env 

      // set middleware
      app.use(express.json())
      app.use(express.urlencoded({ extended: false }))

      // register api routes
      const controllers: RegistrableController[] = container.getAll<RegistrableController>(TYPES.Controller)
      controllers.forEach(controller => controller.registerRoutes(app))

      // test api route
      app.get('/api/product/', async (req: express.Request, res: express.Response): Promise<express.Response> => {
        return res.json({ 'Mainstreet Product API': 'Version 1' })
      })

      app.get('/api/category/', async (req: express.Request, res: express.Response): Promise<express.Response> => {
        return res.json({ 'Mainstreet Category API': 'Version 1' })
      })

      // TODO: add catch all for incorrect routes

      resolve(app)

    } catch(error) {
      logger.error(`Error when bootstrapping app: ${error}`)
      reject(error)
    }
  })
)