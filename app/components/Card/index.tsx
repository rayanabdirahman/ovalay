import React from 'react'
import { View as DefaultView, FlatList } from 'react-native'
import { Text } from '../../components/Text'
import { Image } from '../../components/Image'
import { Thumbnail } from '../../components/Thumbnail'

type Props = DefaultView['props']

export const Card = ({ data }: any) => {
  const renderItem = ({ item }: any) => (
    <Image 
      small={(data.product.length > 2) ? true : false}
      large={(data.product.length < 2) ? true : false}
      source={{ uri: item.image}}
      resizeMode="cover"
    />
  )

  return (
    <DefaultView style={{ marginBottom: 32 }}>
      {/* Head */}
      <DefaultView style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Thumbnail
          small 
          source={{uri: data.user.image}}
          name={data.user.name}
          subtitle={`Bought ${ data.product.length } items`} />

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
