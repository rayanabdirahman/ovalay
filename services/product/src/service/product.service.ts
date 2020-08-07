import { injectable, inject } from 'inversify'
import { CreateNewProductModel } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { ProductRepository } from '../data_access/repository/product.repository'

export interface ProductService {
}

@injectable()
export class ProductServiceImpl implements ProductService {
  private productRepository: ProductRepository

  constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
    this.productRepository = productRepository
  }
}