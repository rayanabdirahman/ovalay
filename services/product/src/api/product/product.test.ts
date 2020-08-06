import supertest from 'supertest'
import bootstrapApp from '../../app'
import { CreateNewProductModel } from '../../domain/interfaces'

/**
 * Create a new product
 * @post '/api/product
 */
describe('[ProductController: createOne]: POST /api/product/', () => {
  it('[validation]: should have a route handler listening on /api/product for POST request', async() => {
    const app = await bootstrapApp()
    const response = await supertest(app).post('/api/product/').send({})
    expect(response.status).not.toEqual(404)
  })

  it('[validation]: should throw and error if a required field is missing', () => {
    // const productModel: CreateNewProductModel = {
    //   brand: 'Vans',
    //   title: 'Vans Old Skool',
    //   description: 'They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.' ,
    //   photo: 'pic goes here',
    //   price: 60.00,
    //   stockQuantity: 10,
    //   rating: [4]
    // }
  })
  
  it('[validation]: should return a status code of 400 with an invalid request', () => {})

  it('[authentication]: can only be accessed when a user is logged in', () => {})
  it('[authentication]: can only be access by admin users', () => {})

  it('[success]: should create a product with valid inputs', () => {})
  it('[success]: should return a status code of 200 on successful request', () => {})
})