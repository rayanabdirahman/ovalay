import 'reflect-metadata'
import { Container } from 'inversify'
import TYPES from './types'
import { RegistrableController } from './api/registrable.controller'
import OrderController from './api/order/order.controller'
import { OrderService, OrderServiceImpl } from './service/order.service'
import { OrderRepository, OrderRepositoryImpl } from './database/repository/order.repository'
import { ProductRepository, ProductRepositoryImpl } from './database/repository/product.repository'

const container = new Container()

// controllers
container.bind<RegistrableController>(TYPES.Controller).to(OrderController)

// services
container.bind<OrderService>(TYPES.OrderService).to(OrderServiceImpl)

// repository
container.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepositoryImpl)
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl)

export default container
