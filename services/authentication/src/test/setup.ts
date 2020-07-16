import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import connectToDbClient from '../data_access/db_client'

let mongo: MongoMemoryServer

beforeAll(async () => {
  // set env variables
  process.env.JWT_SECRET = 'randomstringforJWT'
  

  // create instance of inmemory mongo database
  mongo = new MongoMemoryServer()

  // retrieve database connection uri
  const DB_URI = await mongo.getUri()

  // connect to database
  await connectToDbClient(DB_URI)
})

beforeEach(async () => {
  // retrieve database collections
  const collections = await mongoose.connection.db.collections()

  // empty collections
  collections.forEach(async collection => await collection.deleteMany({}) )
})

afterAll(async () => {
  // stop inmemory instance of mongo
  await mongo.stop()

  // stop database connection
  await mongoose.connection.close()
})