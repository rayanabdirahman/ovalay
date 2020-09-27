type Store = {
  _id: string,
  username: string,
  avatar: string
}

type Products = {
  _id: string,
  image: string
}

export type Data = {
  _id: string,
  store: Store,
  products: Products[]
}