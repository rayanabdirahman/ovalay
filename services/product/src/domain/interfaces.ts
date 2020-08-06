export interface CreateNewProductModel {
  category: string | object
  owner: string | object
  brand: string
  title: string
  description: string
  photo: string
  price: number
  stockQuantity: number
  rating: [number]
}