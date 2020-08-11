enum UserTYpeEnum {
  SELLER = "seller",
  BUYER = 'buyer'
}

export type OwnerModel = {
  _id: string
  name: string
  photo: string
  role: UserTYpeEnum
  product: ProductModel[]
}

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

export const products: OwnerModel[] = [
  {
    _id: "ownerId",
    name: "JD Sport",
    role: UserTYpeEnum.SELLER,
    photo: require('../assets/images/jd-sports-logo.png'),
    product: [
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
        photo: require('../assets/images/air-max.jpg'),
        price: 60,
        stockQuantity: 10
      }
    ]
  },
  {
    _id: "ownerId2",
    name: "The North Face",
    role: UserTYpeEnum.SELLER,
    photo: require('../assets/images/north-face-logo.png'),
    product: [
      {
        _id: "product3",
        category: "category1",
        owner: "owner1",
        brand: "Van",
        title: "Vans Old Skool",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/air-force-white.jpg'),
        price: 60,
        stockQuantity: 10
      },
      {
        _id: "product4",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/air-max-orange.jpg'),
        price: 60,
        stockQuantity: 10
      },
      {
        _id: "product5",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/jordan-1-red.jpg'),
        price: 60,
        stockQuantity: 10
      },
      {
        _id: "product6",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/air-max.jpg'),
        price: 60,
        stockQuantity: 10
      },
      {
        _id: "product7",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/nike-95.jpg'),
        price: 60,
        stockQuantity: 10
      },
    ]
  },
  {
    _id: "ownerId3",
    name: "Jamie Greenwood",
    role: UserTYpeEnum.BUYER,
    photo: require('../assets/images/male-1.jpg'),
    product: [
      {
        _id: "product3",
        category: "category1",
        owner: "owner1",
        brand: "Van",
        title: "Vans Old Skool",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/air-force-white.jpg'),
        price: 60,
        stockQuantity: 10
      },
      {
        _id: "product4",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/air-max-orange.jpg'),
        price: 60,
        stockQuantity: 10
      },
      {
        _id: "product5",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/jordan-1-red.jpg'),
        price: 60,
        stockQuantity: 10
      },
    ]
  },
  {
    _id: "ownerId4",
    name: "Jane Brown",
    role: UserTYpeEnum.BUYER,
    photo: require('../assets/images/female-1.jpg'),
    product: [
      {
        _id: "product6",
        category: "category2",
        owner: "owner2",
        brand: "Nike",
        title: "Air Force 1",
        description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
        photo: require('../assets/images/air-max.jpg'),
        price: 60,
        stockQuantity: 10
      },
      // {
      //   _id: "product7",
      //   category: "category2",
      //   owner: "owner2",
      //   brand: "Nike",
      //   title: "Air Force 1",
      //   description: "They say true style never goes out of fashion; and the Vans Old Skool is a staple trainer for any collection.",
      //   photo: require('../assets/images/nike-95.jpg'),
      //   price: 60,
      //   stockQuantity: 10
      // },
    ]
  }
]