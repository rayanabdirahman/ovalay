import * as Joi from '@hapi/joi'
import { CreateOwner } from '../../domain/interfaces'

export default class OwnerValidator {  
  static createOneSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().required(),
    about: Joi.string().required(),
    photo: Joi.string().required()
  })

  static createOne(model: CreateOwner): Joi.ValidationResult {
    return this.createOneSchema.validate(model)
  }
}