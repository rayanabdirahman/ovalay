import { ActivityIndicator, ScrollView, View } from 'react-native'
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
import ProductInfo from '../components/organisms/ProductInfo'
import ProductFooter from '../components/organisms/ProductFooter'

export default function ProductScreen(
  { navigation, route }: StackScreenProps<ProfileParamList, ProfileTabRouteName.PRODUCT_SCREEN>
) {
  const dispatch = useDispatch()
  const { productId } = route.params
  const { product } = useSelector<State, ProductState>(state => state.product)

  React.useEffect(() => {
    // dispatch action to get product
    dispatch(getProductById(productId))

    navigation.setOptions({
      headerTitle: product === null ? " " : product.name
    })
  }, [navigation])

  return (product === null) ? 
    <ActivityIndicator size="small" color={theme.colour.black} /> : (
    <Layout fullWidth>
      <View style={{ flex: 0.95 }} >
        <ProductHeader username="Footlocker" location="Brent Cross, London" />
        <ScrollView style={{ flexDirection: "column" }} showsVerticalScrollIndicator={false}>      
          <ProductImage source={product.image[0]} />
          <ProductIcons like={true} />
          <ProductInfo
            seller="Footlocker"
            caption="Nike Air Max available now 🔥"
            description={product.description}
            color={product.color}
          />
        </ScrollView>
        <ProductFooter price={product.price} />
      </View>
    </Layout>
  )
}
