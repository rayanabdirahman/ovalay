import React from 'react'
import styled from 'styled-components/native'
import { View as DefaultView, Image as DefaultImage, FlatList } from 'react-native'
import { Thumbnail } from 'native-base'
import { Text as DefaultText } from '../Text'
import { TouchableOpacity } from 'react-native-gesture-handler'

export type ImageProps = DefaultImage['props'] & {
  small?: boolean
}


const Text = styled(DefaultText)`
  margin-bottom: 4px;
`

const SmallText = styled(DefaultText)`
  font-size: 15px;
`

// TODO: images should shrink or grow to fit white space
const Image = styled.Image<ImageProps>`
  width: ${ props => props.small ? '64px' : '140px' };
  height: ${ props => props.small ? '64px' : '140px' };
  margin-right: ${ props => props.small ? '8px' : '16px' }; 
  border-radius: 8px;
`

export const CardItem = ({ data }: any) => {
  const renderItem = ({ item }: any) => {
    return (data.product.length > 2) ?
    <TouchableOpacity onPress={() => alert('product')}>
      <Image small source={item.photo} resizeMode="cover" />
    </TouchableOpacity>
    :
    <TouchableOpacity onPress={() => alert('product')}>
      <Image source={item.photo} resizeMode="cover" />
    </TouchableOpacity>
  }

  return (
    <DefaultView style={{ marginBottom: 24 }}>
      {/* Head */}
      <DefaultView style={{ marginBottom: 16, flexDirection: "row", justifyContent: "space-between" }}>
        <DefaultView style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => alert('profile')}>
            <Thumbnail small source={data.photo} />
          </TouchableOpacity>
          <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
            <Text h2 m-0>{data.name}</Text>
            <SmallText light> 
              { (data.role === "seller") ? ` Realsed ${data.product.length} new items` : `Bought ${data.product.length} items` }
            </SmallText>
          </DefaultView>
        </DefaultView>
        <DefaultView style={{ alignItems: "center", justifyContent: "center" }}>
          <SmallText light>2 mins</SmallText>
        </DefaultView>
      </DefaultView>
      {/* Head */}

      {/*Body */}
      <DefaultView style={{ flexDirection: "row", marginLeft: 24 }}>
        <FlatList
          horizontal={true}
          scrollEnabled={ data.product.length > 2 ? true : false }
          data={data.product}
          renderItem={renderItem}
          keyExtractor={(item: any) => item._id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </DefaultView>
      {/*Body */}
    </DefaultView>
  )
}

