import bootstrapApp from './app'
import logger from './util/logger'
import connectToDbClient from './data_access/db_client'

const runApp = async () => {
  try {
    const PORT = process.env.PORT || 3000
  
    // connect to database
    await connectToDbClient()
  
    const app = await bootstrapApp()
  
    app.listen(PORT, () => logger.debug(`App running on PORT: ${PORT}`))
  
    return app
  
  } catch(error) {
    logger.error(`Unable to run app: ${error}`)
  }
}

( async () => await runApp() )()