import React, { useState } from 'react'
import { View as DefaultView, ScrollView } from 'react-native'
import { Picker, Icon } from "native-base"
import { orders } from '../../temp/data'
import { Layout } from '../../components/Layout'
import { ProductProfile } from '../../components/blocks/ProductProfile'
import { Button } from '../../components/Button'
import { theme } from '../../components/Theme'

export default function Product({ route }: any) {
  const [selectedSize, setSelectedSize] = useState("7");
  const { _id } = route.params
  const product = orders.map(order => order.product.find(product => product._id === _id))[0]
  return (
  <Layout fullwidth withNoContainer>
    <ScrollView>
      <ProductProfile product={product} />
    </ScrollView>
    <DefaultView style={{ flexDirection: "row", alignItems: "center", marginRight: 8, marginLeft: 8, marginBottom: 32 }}>
      <DefaultView style={{ flex: 0.3 }}>
        <Picker
          mode="dropdown"
          iosHeader="Select a Size"
          iosIcon={<Icon name="arrow-down" />}
          style={{ borderColor: theme.colour.lightgrey, borderWidth: 1, height: 60, borderStyle: "solid" }}
          selectedValue={selectedSize}
          onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}>
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
        </Picker>
      </DefaultView>
        
      <DefaultView style={{ flex: 0.7 }} >
      <Button primary title="Add to cart" onPress={() => alert("add to cart")} />
      </DefaultView>
    </DefaultView>
  </Layout>
  )
}