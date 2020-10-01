import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review, CheckoutItem } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const items = [
  {
    _id: '001',
    product: {
      image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
      name: "Nike Air Max 95",
      price: "80.00",
      size: "10",
      colour: "White"
    }
  },
  {
    _id: '002',
    product: {
      image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4",
      name: "Nike Air Max 95",
      price: "80.00",
      size: "10",
      colour: "White"
    }
  },
]

const Checkout = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.CHECKOUT>) => (
  <Layout title="Checkout">
    <ScrollView>
      <DefaultView style={{ marginBottom: 24 }}>
        <CheckoutItem data={items[0]} />
        <CheckoutItem data={items[0]} />
      </DefaultView>
      <Text bold>Address</Text>
      <Text bold>Payment</Text>
    </ScrollView>
  </Layout>
)

export { Checkout }