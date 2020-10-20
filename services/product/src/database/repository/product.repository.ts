import { injectable } from 'inversify'
import Product from '../model/product.model'
import { ProductDocument } from '../interfaces'
import { CreateProductModel } from '../../domain/interfaces'

export interface ProductRepository {
  createOne(model: CreateProductModel): Promise<ProductDocument>
}

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  /**
   * Create a single product
   * @param { CreateProductModel } model - stores information needed to created a new product
   */
  async createOne(model: CreateProductModel): Promise<ProductDocument> {
    const product = new Product(model)
    return await product.save()
  }
}
