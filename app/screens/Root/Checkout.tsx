import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review, CheckoutItem, SelectedAddress } from '../../components'
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

      <DefaultView style={{ marginBottom: 24 }}>
        <Text bold>Address</Text>
        <SelectedAddress />

        <DefaultView style={{ display: "flex", alignSelf: "flex-end" }}>
          <Link title="Change Address" onPress={() => navigation.navigate(RootScreenName.ADDRESSES)} />
        </DefaultView>
      </DefaultView>

      <DefaultView style={{ marginBottom: 24 }}>
        <Text bold>Payment</Text>
      </DefaultView>
    </ScrollView>
    <Button large title="Pay now" onPress={() => alert('User signed in')} />
  </Layout>
)

export { Checkout }