import { injectable, inject } from 'inversify'
import { CreateNewProductModel } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { ProductRepository } from '../data_access/repository/product.repository'
import { ProductDocument } from '../data_access/model/product.model'

export interface ProductService {
  createOne(model: CreateNewProductModel): Promise<ProductDocument>
  findAll(): Promise<ProductDocument[] | null>
  findOne(_id: string): Promise<ProductDocument | null>
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

  async findAll(): Promise<ProductDocument[] | null> { 
    try {
      return await this.productRepository.findAll()
    } catch(error) {
      logger.error(`[ProductService: findAll]: Unable to find products: ${error}`)
      throw error
    }
  }

  async findOne(_id: string): Promise<ProductDocument | null> { 
    try {
      return await this.productRepository.findById(_id)
    } catch(error) {
      logger.error(`[ProductService: findOne]: Unable to find product: ${error}`)
      throw error
    }
  }
}