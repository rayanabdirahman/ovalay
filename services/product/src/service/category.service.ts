import { injectable, inject } from 'inversify'
import { CreateCategory } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { CategoryRepository } from '../data_access/repository/category.repository'
import { CategoryDocument } from '../data_access/model/category.model'

export interface CategoryService {
  createOne(model: CreateCategory): Promise<CategoryDocument>
  findAll(): Promise<CategoryDocument[] | null>
  updateOne(_id: string, model: CreateCategory): Promise<CategoryDocument | null>
  deleteOne(_id: string): Promise<CategoryDocument | null>
}

@injectable()
export class CategoryServiceImpl implements CategoryService {
  private categoryRepository: CategoryRepository

  constructor(@inject(TYPES.CategoryRepository) categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async createOne(model: CreateCategory): Promise<CategoryDocument> { 
    try {
      return await this.categoryRepository.createOne(model)
    } catch(error) {
      logger.error(`[CategoryService: createOne]: Unable to create category: ${error}`)
      throw error
    }
  }

  async findAll(): Promise<CategoryDocument[] | null> { 
    try {
      return await this.categoryRepository.findAll()
    } catch(error) {
      logger.error(`[CategoryService: findAll]: Unable to find categories: ${error}`)
      throw error
    }
  }

  async updateOne(_id: string, model: CreateCategory): Promise<CategoryDocument | null> { 
    try {
      return await this.categoryRepository.updateOne(_id, model)
    } catch(error) {
      logger.error(`[OwnerService: updateOne]: Unable to update category: ${error}`)
      throw error
    }
  }

  async deleteOne(_id: string): Promise<CategoryDocument | null> { 
    try {
      return await this.categoryRepository.deleteOne(_id)
    } catch(error) {
      logger.error(`[CategoryService: deleteOne]: Unable to delete category: ${error}`)
      throw error
    }
  }
}