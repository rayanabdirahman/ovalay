import nats from 'node-nats-streaming'
import logger from '../utilities/logger'

class NatsClient {
  private _client?: nats.Stan

  get client() {
    if (!this._client) {
      throw new Error('Cannot access NATS client before connecting')
    }
    return this._client
  }

  connect(cluster_id: string, client_id: string, url: string) {
    this._client = nats.connect(cluster_id, client_id, { url })
    return new Promise((resolve, reject) => {
      this.client.on('connect', () => {
        logger.info(`Successfully connected to NATS ✅`)
        resolve()
      })

      this.client.on('error', (error: any) => {
        logger.error(`Failed to connect to NATS 🛑 : ${error}`)
        reject()
      })
    })
  }
}

export const natsClient = new NatsClient()
