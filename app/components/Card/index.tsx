import React from 'react'
import { View as DefaultView, FlatList, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'
import { Text } from '../../components/Text'
import { Image } from '../../components/Image'

type Props = DefaultView['props']

export const Card = ({ data }: any) => {
  const renderItem = ({ item }: any) => {
    return (
      <Image 
        small={(data.product.length > 2) ? true : false}
        large={(data.product.length < 2) ? true : false}
        source={{ uri: item.image}}
        resizeMode="cover"
      />
    )
  }

  return (
    <DefaultView style={{ marginBottom: 24 }}>
      {/* Head */}
      <DefaultView style={{ marginBottom: 16, flexDirection: "row", justifyContent: "space-between" }}>
        <DefaultView style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => alert('profile')}>
            <Thumbnail small source={{ uri: data.user.image}} />
          </TouchableOpacity>
          <DefaultView style={{ flexDirection: "column", marginLeft: 8 }}>
            <Text bold>{data.user.name}</Text>
            <Text light>Bought { data.product.length } items</Text>
          </DefaultView>
        </DefaultView>
        <DefaultView style={{ alignItems: "center" }}>
          <Text light>2 mins</Text>
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
