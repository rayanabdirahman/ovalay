import React from 'react'
import { View as DefaultView, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text } from '../../components/Text'
import { Image } from '../../components/Image'
import { Thumbnail } from '../../components/Thumbnail'
import { RootNavigationScreenName } from '../../navigation/types'

type Props = DefaultView['props']

export const Card = ({ data }: any) => {
  const navigation = useNavigation()

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate(RootNavigationScreenName.PRODUCT, { _id: item._id })}>
      <Image 
        small={(data.product.length > 2) ? true : false}
        large={(data.product.length < 2) ? true : false}
        source={{ uri: item.image}}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )

  return (
    <DefaultView style={{ marginBottom: 32 }}>
      {/* Head */}
      <DefaultView style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Thumbnail
          small 
          source={{uri: data.user.image}}
          name={data.user.name}
          subtitle={`@${data.user.username} bought ${ data.product.length < 2 ? "an" : data.product.length } ${ data.product.length < 2 ? "item" : "items" }`} />

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
