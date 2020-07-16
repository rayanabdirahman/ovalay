import * as Joi from '@hapi/joi'
import { SignUpModel, LoginModel } from '../../domain/interfaces'

export default class UserValidator {  
  static signUpSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required()
  })

  static loginSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required()
  })

  static signUp(model: SignUpModel): Joi.ValidationResult {
    return this.signUpSchema.validate(model)
  }

  static login(model: LoginModel): Joi.ValidationResult {
    return this.loginSchema.validate(model)
  }
}