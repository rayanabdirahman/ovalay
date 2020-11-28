import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import Layout from '../components/Layouts'
import { getProducts } from '../store/actions/product'
import { State } from '../store'
import { ProductState } from '../store/types'
import { ProfileTabRouteName } from '../navigation/types'
import { theme } from '../components/Theme'

export default function ProfileScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { products } = useSelector<State, ProductState>(state => state.product)

  React.useEffect(() => {
    navigation.setOptions({})
    // dispatch action to get products
    dispatch(getProducts())
  }, [navigation])

  return !products ?
    <ActivityIndicator size="small" color={theme.colour.black} /> : (
    <Layout>
      <Text>Profile Screen- product num: {products.length}</Text>
      {
        products.map((product, index) => (
          <View key={`product--${index}`} style={{ marginBottom: 20 }}>
            <Button
              onPress={() => navigation.navigate(ProfileTabRouteName.PRODUCT_SCREEN, { productId: product._id })}
              title={JSON.stringify(product)} />
          </View>
        ))
      }
    </Layout>
  )
}
