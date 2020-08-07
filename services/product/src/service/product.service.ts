import { injectable, inject } from 'inversify'
import { CreateNewProductModel } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { ProductRepository } from '../data_access/repository/product.repository'
import { ProductDocument } from '../data_access/model/product.model'

export interface ProductService {
  createOne(model: CreateNewProductModel): Promise<ProductDocument>
}

@injectable()
export class ProductServiceImpl implements ProductService {
  private productRepository: ProductRepository

  constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async createOne(model: CreateNewProductModel): Promise<ProductDocument> { 
    try {
      return await this.productRepository.createOne(model)
    } catch(error) {
      logger.error(`[ProductService: createOne]: Unable to create product: ${error}`)
      throw error
    }
  }
}