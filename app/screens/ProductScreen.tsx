import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import Layout from '../components/Layouts'
import { getProductById } from '../store/actions/product'
import { State } from '../store'
import { ProductState } from '../store/types'
import { theme } from '../components/Theme'
import { ProfileParamList, ProfileTabRouteName } from '../navigation/types'
import ProductHeader from '../components/organisms/ProductHeader'
import ProductImage from '../components/atoms/ProductImage'
import ProductIcons from '../components/organisms/ProductIcons'

export default function ProductScreen(
  { navigation, route }: StackScreenProps<ProfileParamList, ProfileTabRouteName.PRODUCT_SCREEN>
) {
  const dispatch = useDispatch()
  const { productId } = route.params
  const { product } = useSelector<State, ProductState>(state => state.product)

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: product.name
    })
    // dispatch action to get product
    dispatch(getProductById(productId))
  }, [navigation])

  return (product === null) ? 
    <ActivityIndicator size="small" color={theme.colour.black} /> : (
    <Layout>
      <ProductHeader username="Footlocker" location="Brent Cross, London" />
      <ScrollView>      
        <ProductImage source="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" />
        <ProductIcons like={false} />
        <View style={{ marginTop: 50 }}>
          <Text>Product name: {product.name}</Text>
          <Text>Product name: {product.brand}</Text>
          <Text>Product name: {product.color}</Text>
        </View>
      </ScrollView>
    </Layout>
  )
}
