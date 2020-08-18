import nats from 'node-nats-streaming'
import { NatsEventSubjectEnum } from '../domain/enums'

interface NatsEvent {
  subject: NatsEventSubjectEnum
  data: any
}

export abstract class NatsPublisher<T extends NatsEvent> {
  abstract subject: T['subject']
  private client: nats.Stan // instance of nats stan client

  constructor (client: nats.Stan) {
    this.client = client
  }

  publish (data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (error) => {
        if (error) {
          console.error(`Error when publishing event: ${error}`)
          reject(error)
        }
        console.log('event published')

        resolve()
      })
    })
  }
}