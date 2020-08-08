import { injectable, inject } from 'inversify'
import { CreateCategory } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { CategoryRepository } from '../data_access/repository/category.repository'
import { CategoryDocument } from '../data_access/model/category.model'

export interface CategoryService {
  createOne(model: CreateCategory): Promise<CategoryDocument>
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
}