import { injectable } from 'inversify'
import Product, { ProductDocument } from '../model/product.model'
import { CreateNewProductModel } from '../../domain/interfaces'

export interface ProductRepository {
  createOne(model: CreateNewProductModel): Promise<ProductDocument>
  findById(_id: string): Promise<ProductDocument | null>
}

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  async createOne(model: CreateNewProductModel): Promise<ProductDocument> {
    const product = new Product(model)
    return await product.save()
  }

  async findById(_id: string): Promise<ProductDocument | null> {
    return await Product.findById(_id)
  }
}