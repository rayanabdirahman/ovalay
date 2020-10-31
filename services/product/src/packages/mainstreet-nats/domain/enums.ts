export enum NatsEventSubjectEnum {
  PRODUCT_CREATED = 'product:created',
  PRODUCT_UPDATED = 'product:updated'
}

export enum OrderStatusEnum {
  // when order has been created but product has not been reserved
  CREATED = 'created',

  // when the product the order is trying to reserve has been reserved already
  // when the user cancels the order
  CANCELLED = 'cancelled',

  // the order has successfully reserved the product
  AWAITING_PAYMENT = 'awaiting:payment',

  // the order has successfully reserved the product
  // the product has been paid for
  COMPLETED = 'completed',
}
