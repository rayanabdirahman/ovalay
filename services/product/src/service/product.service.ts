import { injectable, inject } from 'inversify'
import { ProductDocument } from '../database/interfaces'
import { ProductRepository } from '../database/repository/product.repository'
import { CreateProductModel } from '../domain/interfaces'
import TYPES from '../types'
import logger from '../utilities/logger'

export interface ProductService {
  createOne(model: CreateProductModel): Promise<ProductDocument>
  findOne(_id: string): Promise<ProductDocument | null>
  findAll(): Promise<ProductDocument[] | null>
  updateOne(_id: string, model: CreateProductModel): Promise<ProductDocument | null>
}

@injectable()
export class ProductServiceImpl implements ProductService {
  private productRepository: ProductRepository

  constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async createOne(model: CreateProductModel): Promise<ProductDocument> {
    try {
      const product = await this.productRepository.createOne(model)
      return product
    } catch(error) {
      logger.error(`[ProductService: createOne]: Unabled to create product: ${error}`)
      throw error
    }
  }

  async findOne(_id: string): Promise<ProductDocument | null> {
    try {
      const product = await this.productRepository.findById(_id)
      return product
    } catch(error) {
      logger.error(`[ProductService: findOne]: Unable to find product: ${error}`)
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

  async updateOne(_id: string, model: CreateProductModel): Promise<ProductDocument | null> { 
    try {
      // check if user owns product before updating
      const product = await this.productRepository.findById(_id)
      if (product?.sellerId !== model.sellerId) {
        throw new Error('You are not authorised to update this product')
      }

      return await this.productRepository.updateOne(_id, model)
    } catch(error) {
      logger.error(`[ProductService: updateOne]: Unable to update product: ${error}`)
      throw error
    }
  }
}
