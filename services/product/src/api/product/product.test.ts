import supertest from 'supertest'
import bootstrapApp from '../../app'

/**
 * Create a new product
 * @post '/api/product
 */
describe('[ProductController: createOne]: POST /api/product/', () => {
  it('[validation]: should have a route handler listening to /api/product for post request', async() => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/user/').send({})
    expect(response.status).not.toEqual(404)
  })

  it('[validation]: should throw and error if a required field is missing', () => {})
  it('[validation]: should return a status code of 400 with an invalid request', () => {})

  it('[authentication]: can only be accessed when a user is logged in', () => {})
  it('[authentication]: can only be access by admin users', () => {})

  it('[success]: should create a product with valid inputs', () => {})
  it('[success]: should return a status code of 200 on successful request', () => {})
})