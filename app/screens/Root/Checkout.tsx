import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review } from '../../components'

const Checkout = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.CHECKOUT>) => (
  <Layout title="Checkout">
    <Text bold>Address</Text>
    <Text bold>Payment</Text>
  </Layout>
)

export { Checkout }