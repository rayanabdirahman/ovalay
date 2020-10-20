import { injectable } from 'inversify'
import Product from '../model/product.model'
import { ProductDocument } from '../interfaces'
import { CreateProductModel } from '../../domain/interfaces'
import logger from '../../utilities/logger'

export interface ProductRepository {
  createOne(model: CreateProductModel): Promise<ProductDocument>
  findById(_id: string): Promise<ProductDocument | null>
  findAll(): Promise<ProductDocument[] | null>
  updateOne(_id: string, model: CreateProductModel): Promise<ProductDocument | null>
}

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  async createOne(model: CreateProductModel): Promise<ProductDocument> {
    const product = new Product(model)
    return await product.save()
  }

  async findById(_id: string): Promise<ProductDocument | null> {
    return await Product.findById(_id).select('-__v')
  }

  async findAll(): Promise<ProductDocument[] | null> {
    return await Product.find({}).select('-__v')
  }

  async updateOne(_id: string, model: CreateProductModel): Promise<ProductDocument | null> {
    try {
      const product = await this.findById(_id)
      if(!product) {
        throw new Error('Product does not exist')
      }

      // set updates
      product.set({ ...model })

      return await product.save()
    } catch(error) {
      logger.error(`[ProductRepository: updateOne]: Unable to update product: ${error}`)
      throw error
    }
  }
}
