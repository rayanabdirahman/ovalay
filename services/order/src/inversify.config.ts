import 'reflect-metadata'
import { Container } from 'inversify'
import TYPES from './types'
import { RegistrableController } from './api/registrable.controller'
import OrderController from './api/order/order.controller'
// import { ProductService, ProductServiceImpl } from './service/product.service'
import { OrderRepository, OrderRepositoryImpl } from './database/repository/order.repository'

const container = new Container()

// controllers
container.bind<RegistrableController>(TYPES.Controller).to(OrderController)

// services
// container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl)

// repository
container.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepositoryImpl)

export default container
