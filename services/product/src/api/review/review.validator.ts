import * as Joi from '@hapi/joi'
import { CreateReview } from '../../domain/interfaces'

export default class ReviewValidator {  
  static createOneSchema: Joi.ObjectSchema = Joi.object({
    body: Joi.string().required(),
    photo: Joi.string().required(),
    rating: Joi.number(),
    user: Joi.string(),
    product: Joi.string()
  })

  static createOne(model: CreateReview): Joi.ValidationResult {
    return this.createOneSchema.validate(model)
  }
}