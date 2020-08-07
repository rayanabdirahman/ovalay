import * as Joi from '@hapi/joi'
import { CreateNewProductModel } from '../../domain/interfaces'

export default class ProductValidator {  
  static createOneSchema: Joi.ObjectSchema = Joi.object({
    category: Joi.string(),
    owner: Joi.string(),
    brand: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    photo: Joi.string().required(),
    price: Joi.number().required(),
    stockQuantity: Joi.number().required(),
    rating: Joi.array()
  })

  static createOne(model: CreateNewProductModel): Joi.ValidationResult {
    return this.createOneSchema.validate(model)
  }
}