import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, CartItem } from '../../components'
import { Data } from '../../types'

const cartItems : Data[] = [
  {
    _id: '01',
    store: {
      _id: '1',
      username: 'Footlocker',
      avatar: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
    },
    products: [
      {
        _id: '001',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '002',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      }
    ] 
  },
  {
    _id: '02',
    store: {
      _id: '2',
      username: 'JD Sport',
      avatar: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
    },
    products: [
      {
        _id: '003',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '004',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '005',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '006',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '007',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '008',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
    ] 
  },
  {
    _id: '03',
    store: {
      _id: '3',
      username: 'Footlocker',
      avatar: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
    },
    products: [
      {
        _id: '003',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '004',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '005',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      },
      {
        _id: '006',
        image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
      }
    ] 
  },
]

// const data: Data[] = [
//   {

//   }
// ]

const Cart = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.CART>) => (
  <Layout>
    <CartItem data={cartItems} />
  </Layout>
)

export { Cart }