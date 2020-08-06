import 'reflect-metadata'
import { Container } from 'inversify'
import { RegistrableController } from './api/registrable.controller'
import TYPES from './types'
import ProductController from './api/product/product.controller'
// import { ProductService, ProductServiceImpl } from './service/product.service'
// import { ProductRepository, ProductRepositoryImpl } from './data_access/repository/product.repository'

const container = new Container()

// controllers
container.bind<RegistrableController>(TYPES.Controller).to(ProductController)

// services
// container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl)

// repository
// container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl)

export default container