import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import Layout from '../components/Layouts'
import { getProducts } from '../store/actions/product'
import { State } from '../store'

export default function ProfileScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { product } = useSelector<State, State>(state => state)

  React.useEffect(() => {
    navigation.setOptions({})

    // dispatch action to get products
    dispatch(getProducts())
  }, [navigation])

  return (
    <Layout>
      <Text>Profile Screen- product num: {product.products.length}</Text>
      {
        product.products.map((product, index) => (
          <View key={`product--${index}`} style={{ marginBottom: 20 }}>
            <Text>{JSON.stringify(product)}</Text>
          </View>
        ))
      }
    </Layout>
  )
}
