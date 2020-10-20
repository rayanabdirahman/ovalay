import * as Joi from '@hapi/joi'
import { CreateProductModel  } from '../../domain/interfaces'

export default class ProductValidator {  
  static createOneSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    color: Joi.string().required(),
    type: Joi.string().required(),
    brand: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    sellerId: Joi.string().required(),
    availableStockQuantity: Joi.number().required(),
  })

  static createOne(model: CreateProductModel): Joi.ValidationResult {
    return this.createOneSchema.validate(model)
  }
}
