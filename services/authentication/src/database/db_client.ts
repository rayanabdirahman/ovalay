import mongoose from 'mongoose'
import logger from '../utilities/logger'

// TODO: Use environment variable for mongo URI
const MONGO_URI = 'mongodb://authentication-mongo-service:27017/authentication'

const connectToDbClient = async (uri: string = MONGO_URI): Promise<void> => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    logger.info(`Successfully connected to database ✅`)

  } catch(error) {
    logger.error(`Failed to connect to database 🛑 : ${error}`)
  }
}

export default connectToDbClient