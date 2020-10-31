import { OrderStatusEnum } from '../packages/mainstreet-nats';
import { UserRolesEnum } from './enums';

export interface CreateProductModel {
  name: string
  price: string
}

export interface CreateOrderModel {
  productId: string
  userId: string
  status: OrderStatusEnum
}

export interface JwtUserPayload {
  _id: string | object
  username: string
  name: string
  email: string
  role: UserRolesEnum
}

export interface JwtPayload {
  user: JwtUserPayload
}
