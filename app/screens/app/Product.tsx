import React from 'react'
import { View as DefaultView } from 'react-native'
import { orders } from '../../temp/data'
import { Text } from '../../components/Text'
import { Layout } from '../../components/Layout'
import { Thumbnail } from '../../components/Thumbnail'
import { Image } from '../../components/Image'
import { ProductProfile } from '../../components/blocks/ProductProfile'

export default function Product({ route }: any) {
  const { _id } = route.params
  const product = orders.map(order => order.product.find(product => product._id === _id))[0]
  return (
    <Layout fullwidth withNoContainer>
      {/* { console.log('product', product ) } */}
      <ProductProfile product={product} />
    </Layout>
  )
}