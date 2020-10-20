import { injectable, inject } from 'inversify'
import { ProductDocument } from '../database/interfaces'
import { ProductRepository } from '../database/repository/product.repository'
import { CreateProductModel } from '../domain/interfaces'
import TYPES from '../types'
import logger from '../utilities/logger'

export interface ProductService {
  createOne(model: CreateProductModel): Promise<ProductDocument>
}

@injectable()
export class ProductServiceImpl implements ProductService {
  private productRepository: ProductRepository

  constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  /**
   * Create a single product
   * @param { CreateProductModel } model - stores information needed to created a new product
   */
  async createOne(model: CreateProductModel): Promise<ProductDocument> {
    try {

      const product = await this.productRepository.createOne(model)

      return product

    } catch(error) {
      logger.error(`[ProductService: createOne]: Unabled to create product: ${error}`)
      throw error
    }
  }
}
