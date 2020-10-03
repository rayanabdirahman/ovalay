import * as Joi from '@hapi/joi'
import { UserRolesEnum} from '../../domain/enums'
import { SignInModel, SignUpModel } from '../../domain/interfaces'

export default class UserValidator {  
  static signUpSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
    role: Joi.string().valid(UserRolesEnum.BUYER, UserRolesEnum.SELLER)
  })

  static signUp(model: SignUpModel): Joi.ValidationResult {
    return this.signUpSchema.validate(model)
  }

  static signInSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required()
  })

  static signIn(model: SignInModel): Joi.ValidationResult {
    return this.signInSchema.validate(model)
  }
}
