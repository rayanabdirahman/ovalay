import supertest from 'supertest'
import bootstrapApp from '../../app'
import { CreateNewProductModel } from '../../domain/interfaces'
import path from 'path'

// const testImage = '../../test/testphoto.png'

// const testImage = require('../../test/testphoto.png')

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

  it('[validation]: should throw and error if a required field is missing', async () => {
    const model: CreateNewProductModel = {
      brand: '',
      title: 'Vans Old Skool',
      description: 'They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.' ,
      photo: 'pic goes here',
      price: 60.00,
      stockQuantity: 10,
      rating: [4]
    }

    const app = await bootstrapApp()
    const response =  await supertest(app).post('/api/product/').send(model)
    expect(response.status).toEqual(400)

    expect(response.body).toEqual({
      'status': 'error',
      'code': 400,
      'error': '"brand" is not allowed to be empty'
    })
  })

  // it('[status code]: should return a status code of 200 on successful request', async () => {
  //   const testImage = path.join(__dirname, '../../test', 'testphoto.png')
  //   const buffer = Buffer.from('some data');

  //   const model: CreateNewProductModel = {
  //     brand: 'Vans',
  //     title: 'Vans Old Skool',
  //     description: 'They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.' ,
  //     photo: 'pic goes here',
  //     price: 60.00,
  //     stockQuantity: 10,
  //     rating: [4]
  //   }

  //   const app = await bootstrapApp()
  //   // const response =  await supertest(app).post('/api/product/').field({
  //   //   brand: 'Vans',
  //   //   title: 'Vans Old Skool',
  //   //   description: 'They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.' ,
  //   //   photo: 'pic goes here',
  //   //   price: 60.00,
  //   //   stockQuantity: 10,
  //   //   rating: [4]
  //   // }).attach('file', buffer, 'test.png')

  //   // const response =  await supertest(app).post('/api/product/').send(model)
  //   const response =  await supertest(app).post('/api/product/').field({
  //     brand: 'Vans',
  //     title: 'Vans Old Skool',
  //     description: 'They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.' ,
  //     photo: `${testImage}`,
  //     price: 60.00,
  //     stockQuantity: 10,
  //     rating: [4]
  //   }).attach('file', buffer, `${testImage}`)

  //   console.log(response.error)
  //   expect(response.status).toEqual(200)
  // })

  it('[status code]: should return a status code of 400 with an invalid request body', async () => {
    const app = await bootstrapApp()
    await supertest(app).post('/api/product/').send({}).expect(400)
  })

  // it('[authentication]: can only be accessed when a user is logged in', () => expect(true).toEqual(false))
  // it('[authentication]: can only be access by admin users', () => expect(true).toEqual(false))
  // it('[success]: should create a product with valid inputs', async () => expect(true).toEqual(false))
})