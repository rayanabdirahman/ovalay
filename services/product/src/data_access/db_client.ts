import mongoose from 'mongoose'
import logger from '../util/logger'

const connectToDbClient = async (uri: string = `${process.env.MONGO_URI}`): Promise<void> => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    logger.info(`Successfully connected to database ✅`)

  } catch(error) {
    logger.error(`Failed to connect to database 🛑 : ${error}`)
  }
}

export default connectToDbClient