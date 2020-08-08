import { injectable } from 'inversify'
import Product, { ProductDocument } from '../model/product.model'
import { CreateNewProductModel } from '../../domain/interfaces'

export interface ProductRepository {
  createOne(model: CreateNewProductModel): Promise<ProductDocument>
  findById(_id: string): Promise<ProductDocument | null>
  findAll(): Promise<ProductDocument[] | null>
  updateOne(_id: string, model: CreateNewProductModel): Promise<ProductDocument | null>
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

  async findAll(): Promise<ProductDocument[] | null> {
    return await Product.find().select('-__v')
  }

  async updateOne(_id: string, model: CreateNewProductModel): Promise<ProductDocument | null> {
    return await Product.findOneAndUpdate({ _id }, { $set: { ...model } }, { new: true });
  }
}