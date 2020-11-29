import { ActivityIndicator, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import Layout from '../components/Layouts'
import { getProductById } from '../store/actions/product'
import { State } from '../store'
import { ProductState } from '../store/types'
import { theme } from '../components/Theme'
import { ProfileParamList, ProfileTabRouteName } from '../navigation/types'

export default function ProductScreen(
  { navigation, route }: StackScreenProps<ProfileParamList, ProfileTabRouteName.PRODUCT_SCREEN>
) {
  const dispatch = useDispatch()
  const { productId } = route.params
  const { product } = useSelector<State, ProductState>(state => state.product)

  React.useEffect(() => {
    navigation.setOptions({})
    // dispatch action to get product
    dispatch(getProductById(productId))
  }, [navigation])

  return (product === null) ? 
    <ActivityIndicator size="small" color={theme.colour.black} /> : (
    <Layout>
      <Text>Product Screen - productId: {productId} </Text>
      <View style={{ marginTop: 50 }}>
        <Text>Product name: {product.name}</Text>
        <Text>Product name: {product.brand}</Text>
        <Text>Product name: {product.color}</Text>
      </View>
    </Layout>
  )
}
