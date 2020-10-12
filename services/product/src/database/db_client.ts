import mongoose from 'mongoose'
import logger from '../utilities/logger'

const MONGO_URI = `${process.env.MONGO_URI}`

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