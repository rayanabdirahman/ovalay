import mongoose from 'mongoose'
import logger from '../util/logger'

const DB_URI = `mongodb://authentication-mongo-service:27017/authentication`

const connectToDbClient = async (uri: string = DB_URI): Promise<void> => {
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