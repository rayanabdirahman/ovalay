export type ProductModel = {
  _id: string
  category: string
  owner: string
  brand: string
  title: string
  description: string
  photo: string
  price: number
  stockQuantity: number
  review?: []
}

export const products: ProductModel[] = [
  {
    _id: "product1",
    category: "category1",
    owner: "owner1",
    brand: "Van",
    title: "Vans Old Skool",
    description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
    photo: require('../assets/images/vans.jpg'),
    price: 60,
    stockQuantity: 10
  },
  {
    _id: "product2",
    category: "category2",
    owner: "owner2",
    brand: "Nike",
    title: "Air Force 1",
    description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
    photo: require('../assets/images/air-force-white.jpg'),
    price: 60,
    stockQuantity: 10
  }
]