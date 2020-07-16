import supertest from 'supertest'
import bootstrapApp from '../../app'
import { SignUpModel, LoginModel } from '../../domain/interfaces'
import { ResponseHeaderEnum } from '../../domain/enums'

/**
 * User signup flow
 * @post '/api/user/'
 */
describe('[UserController: signup]: POST /api/user/', () => {
  const signupModel: SignUpModel = {
    username: 'John',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@test.com',
    password: '123456'
  }

  it('[success]: should set Authorization header after successful signup', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send(signupModel).expect(200)

    expect(response.header).toHaveProperty('authorization')
  })

  it('[status code]: should return a status code of 200 on successful signup', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send(signupModel).expect(200)
  })

  it('[status code]: should return a status code of 400 with an invalid request body', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send({
      email: 'john@test.com',
      password: '123456'
    }).expect(400)
  })

  it('[validation]: should return an error for invalid type in request body', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send({
      username: 'John',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      password: 123456
    }).expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': '"password" must be a string'
    })
  })

  it('[validation]: should return an error for invalid email format', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send({
      username: 'John',
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalidemailformat.com',
      password: '123456'
    }).expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': '"email" must be a valid email'
    })
  })

  it('[validation]: should return an error for invalid password length', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send({
      username: 'John',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      password: '1234'
    }).expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': '"password" length must be at least 6 characters long'
    })
  })

  it('[validation]: should return an error for missing required field', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send({
      email: 'john@test.com',
      password: '123456'
    }).expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': '"username" is required'
    })
  })

  it('[validation]: should return an error for duplicate emails', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send(signupModel).expect(200)
    await supertest(app).post('/api/user/').send(signupModel).expect(400)
  })
})

/**
 * User login flow
 * @post '/api/user/login'
 */
describe('[UserController: login]: POST /api/user/login', () => {
  const signupModel: SignUpModel = {
    username: 'John',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@test.com',
    password: '123456'
  }

  const loginModel: LoginModel = {
    email: 'john@test.com',
    password: '123456'
  }

  it('[success]: should set Authorization header after successful login', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send(signupModel).expect(200)
    const response = await supertest(app).post('/api/user/login').send(loginModel).expect(200)

    expect(response.header).toHaveProperty('authorization')
  })

  it('[validation]: should return an error if email does not exist', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send(signupModel).expect(200)
    const response = await supertest(app).post('/api/user/login').send({
      email: 'userdoesnotexist@test.com',
      password: '123456'
    }).expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': 'Invalid credentials'
    })
  })

  it('[validation]: should return an error if password is incorrect', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send(signupModel).expect(200)
    const response = await supertest(app).post('/api/user/login').send({
      email: 'john@test.com',
      password: 'wrongpassword'
    }).expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': 'Invalid credentials'
    })
  })
})

/**
 * User logout flow
 * @post '/api/user/logout'
 */
describe('[UserController: logout]: POST /api/user/logout', () => {

  it('[success]: should remove Authorization header after successful logout', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/user/').send({
      username: 'John',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      password: '123456'
    }).expect(200)

    await supertest(app).post('/api/user/login').send({
      email: 'john@test.com',
      password: '123456'
    }).expect(200)

    const response = await supertest(app).post('/api/user/logout').send({}).expect(200)

    expect(response.header).not.toHaveProperty('authorization')

    expect(response.body).toEqual({
      'status': 'success',
      'code': 200,
      'data': 'Successfully logged user out'
    })

  })
})

/**
 * User authorise flow
 * @get '/api/user/authorise'
 */
describe('[UserController: authorise]: GET /api/user/authorise', () => {
  it('[success]: should return user details after successful authorisation', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send({
      username: 'John',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      password: '123456'
    }).expect(200)

    // get token from authorisation header from signup response
    const token = response.header['authorization']

    // set cookie on request
    const authorisedResponse = await supertest(app).get('/api/user/authorise').set(ResponseHeaderEnum.AUTHORISATION, token).expect(200)

    expect(authorisedResponse.body).toEqual({
      'status': 'success',
      'code': 200,
      'data': {
        user: {
          _id: expect.any(String),
          username: 'John',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@test.com'
        }
      }
    })
  })

  it('[validation]: should return an error if user is not authorised', async () => {
    const app = await bootstrapApp()
    const response = await supertest(app).get('/api/user/authorise').expect(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': 'Authorisation denied. Please login'
    })
  })
})