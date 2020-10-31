import bootstrapApp from './app'
import connectToDbClient from './database/db_client'
import { natsClient } from './event/nats-client'
import logger from './utilities/logger'

const runApp = async () => {
  try {
    const PORT = process.env.PORT || 3000

    // connect to database
    await connectToDbClient()

    // connect to NATS
    await natsClient.connect("mainstreet", "abcd", "http://nats-service:4222")
    // handle NATS termination
    natsClient.client.on('close', () => {
      logger.debug(`Connection to NATS terminated`)
      process.exit()
    })
    process.on('SIGINT', () => natsClient.client)
    process.on('SIGTERM', () => natsClient.client)

    const app = await bootstrapApp()
  
    app.listen(PORT, () => logger.debug(`App running on PORT: ${PORT}`))
  
    return app
  
  } catch(error) {
    logger.error(`Unable to run app: ${error}`)
  }
}

( async () => await runApp() )()