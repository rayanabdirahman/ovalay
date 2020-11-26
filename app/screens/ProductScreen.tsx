import { useNavigation, useRoute } from '@react-navigation/native'
import * as React from 'react'
import { Text } from 'react-native'

import Layout from '../components/Layouts'

export default function ProductScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { productId } = route.params
  return (
    <Layout>
      <Text>Product Screen - productId: {productId} </Text>
    </Layout>
  )
}