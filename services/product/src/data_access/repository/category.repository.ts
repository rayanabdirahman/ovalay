import { injectable } from 'inversify'
import Category, { CategoryDocument } from '../model/category.model'
import { CreateCategory } from '../../domain/interfaces'

export interface CategoryRepository {
  createOne(model: CreateCategory): Promise<CategoryDocument>
  findById(_id: string): Promise<CategoryDocument | null>
}

@injectable()
export class CategoryRepositoryImpl implements CategoryRepository {
  async createOne(model: CreateCategory): Promise<CategoryDocument> {
    const category = new Category(model)
    return await category.save()
  }

  async findById(_id: string): Promise<CategoryDocument | null> {
    return await Category.findById(_id)
  }
}