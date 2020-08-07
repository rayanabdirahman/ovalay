export interface CreateNewProductModel {
  category?: string | object
  owner?: string | object
  brand: string
  title: string
  description: string
  photo: string
  price: number
  stockQuantity: number
  rating: [number]
}

export interface CreateCategory {
  type: string
}

export interface CreateOwner {
  name: string,
  about: string,
  photo: string
}