import nats from 'node-nats-streaming'
import { NatsEventSubjectEnum } from '../domain/enums'

interface NatsEvent {
  subject: NatsEventSubjectEnum
  data: any
}

export abstract class NatsListener<T extends NatsEvent> {
  abstract subject: T['subject']
  abstract queueGroupName: string
  abstract onMessage (data: T['data'], message: nats.Message): void
  private client: nats.Stan // instance of nats stan client
  protected ackWait = 5 * 1000 // wait 5 seconds for acknowledgement

  constructor (client: nats.Stan) {
    this.client = client
  }

  subscriptionOptions () {
    return this.client
      .subscriptionOptions()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDeliverAllAvailable()
      .setDurableName(this.queueGroupName)
  }

  listen () {
    const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions())
    subscription.on('message', (message: nats.Message) => {
      console.log(
        `Message recieved: ${this.subject} / ${this.queueGroupName}`
      )

      // parse message data
      const parsedMessage = this.parseMessage(message)
      this.onMessage(parsedMessage, message)
    })
  }

  parseMessage (message: nats.Message) {
    const data = message.getData()
    // JSON parse string or buffer
    return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf-8'))
  }
}