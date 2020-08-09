import * as Joi from '@hapi/joi'
import { CreateCategory } from '../../domain/interfaces'

export default class CategoryValidator {  
  static createOneSchema: Joi.ObjectSchema = Joi.object({
    type: Joi.string().required()
  })

  static createOne(model: CreateCategory): Joi.ValidationResult {
    return this.createOneSchema.validate(model)
  }
}