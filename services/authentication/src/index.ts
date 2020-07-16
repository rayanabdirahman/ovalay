import bootstrapApp from './app'
import logger from './util/logger'
import connectToDbClient from './data_access/db_client'

const runApp = async () => {
  const PORT = process.env.PORT || 3000

  // connect to database
  await connectToDbClient()

  const app = await bootstrapApp()

  app.listen(PORT, () => logger.debug(`App running on PORT: ${PORT}`))

  return app
}

( async () => await runApp() )()