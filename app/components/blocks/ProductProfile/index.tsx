import React from 'react'
import { View as DefaultView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Thumbnail } from '../../Thumbnail'
import { ProductImage } from '../../Image'
import { Text, ScreenTitle } from '../../Text'
import { theme } from '../../Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ProductProfile = ({ product }: any) => (
  <React.Fragment>
    <DefaultView style={{ padding: 8, paddingBottom: 0 }}>
      { console.log('product', product ) }
      <Thumbnail
          small
          smallMarginBottom
          source={{uri: product?.seller?.image.url}}
          name={product?.seller?.name}
          subtitle={product?.seller?.location} />
    </DefaultView>

    <ProductImage  large source={{ uri: product?.image}}/>

    <TouchableOpacity onPress={() => alert("Liked")} style={{ margin: 8, marginTop: 16 }}>
      <AntDesign style={{ marginRight: 16 }} name="hearto" size={24} color={theme.colour.black}/>
    </TouchableOpacity>

    <DefaultView style={{ margin: 8, marginTop: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <DefaultView>
        <Text bold>{product.brand}</Text>
        <Text>{product.name}</Text>
      </DefaultView>
      <DefaultView>
        <ScreenTitle>£{product.price}</ScreenTitle>
      </DefaultView>
    </DefaultView>

    <DefaultView style={{ margin: 8, marginTop: 0 }}>
      <Text>{product.description}</Text>
    </DefaultView>
  </React.Fragment>
)