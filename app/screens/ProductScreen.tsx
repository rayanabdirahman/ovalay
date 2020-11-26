import { useNavigation, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import Layout from '../components/Layouts'
import { getProduct } from '../store/actions/product'
import { State } from '../store'

export default function ProductScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const { productId } = route.params
  const { product } = useSelector<State, State>(state => state)

  React.useEffect(() => {
    navigation.setOptions({})

    // dispatch action to get product
    dispatch(getProduct(productId))
  }, [navigation])

  return (
    <Layout>
      <Text>Product Screen - productId: {productId} </Text>
      <View style={{ marginTop: 50 }}>
        <Text>Product name: {product.product.name}</Text>
        <Text>Product name: {product.product.brand}</Text>
        <Text>Product name: {product.product.color}</Text>
      </View>
    </Layout>
  )
}