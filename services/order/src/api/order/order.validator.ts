import * as Joi from '@hapi/joi'
import { CreateOrderModel  } from '../../domain/interfaces'

export default class OrderValidator {  
  static createOneSchema: Joi.ObjectSchema = Joi.object({
    productId: Joi.string().required(),
    userId: Joi.string().required()
  })

  static createOne(model: CreateOrderModel): Joi.ValidationResult {
    return this.createOneSchema.validate(model)
  }
}