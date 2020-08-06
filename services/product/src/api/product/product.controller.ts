import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'


@injectable()
export default class ProductController implements RegistrableController {

  constructor() {
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/product/', (req, res) => res.send({"hello": "world"}))
  }
}