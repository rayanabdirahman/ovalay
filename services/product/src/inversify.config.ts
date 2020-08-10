import 'reflect-metadata'
import { Container } from 'inversify'
import { RegistrableController } from './api/registrable.controller'
import TYPES from './types'
import ProductController from './api/product/product.controller'
import { ProductService, ProductServiceImpl } from './service/product.service'
import { ProductRepository, ProductRepositoryImpl } from './data_access/repository/product.repository'
import { CategoryRepository, CategoryRepositoryImpl } from './data_access/repository/category.repository'
import { OwnerRepository, OwnerRepositoryImpl } from './data_access/repository/owner.repository'
import CategoryController from './api/category/category.controller'
import { CategoryService, CategoryServiceImpl } from './service/category.service'
import OwnerController from './api/owner/owner.controller'
import { OwnerService, OwnerServiceImpl } from './service/owner.service'
import { ReviewRepository, ReviewRepositoryImpl } from './data_access/repository/review.repository'
import ReviewController from './api/review/review.controller'
import { ReviewService, ReviewServiceImpl } from './service/review.service'

const container = new Container()

// controllers
container.bind<RegistrableController>(TYPES.Controller).to(ProductController)
container.bind<RegistrableController>(TYPES.Controller).to(CategoryController)
container.bind<RegistrableController>(TYPES.Controller).to(OwnerController)
container.bind<RegistrableController>(TYPES.Controller).to(ReviewController)

// services
container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl)
container.bind<CategoryService>(TYPES.CategoryService).to(CategoryServiceImpl)
container.bind<OwnerService>(TYPES.OwnerService).to(OwnerServiceImpl)
container.bind<ReviewService>(TYPES.ReviewService).to(ReviewServiceImpl)

// repository
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl)
container.bind<CategoryRepository>(TYPES.CategoryRepository).to(CategoryRepositoryImpl)
container.bind<OwnerRepository>(TYPES.OwnerRepository).to(OwnerRepositoryImpl)
container.bind<ReviewRepository>(TYPES.ReviewRepository).to(ReviewRepositoryImpl)

export default container