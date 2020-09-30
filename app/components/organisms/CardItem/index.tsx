import React from 'react'
import { View as DefaultView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'
import { Data } from '../../../types'
import { Thumbnail } from '../Thumbnail'
import { RootScreenName } from '../../../navigation/types'

type Props = {
  data: Data
}

export const CardItem = ({ data }: Props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }: any) =>  (
    <Image
      small={(data.products.length > 2) ? true : false}
      source={{ uri: item.image }}
      resizeMode="cover"
    />
  )
  
  return (
    <DefaultView style={{ marginBottom: 32 }}>
      <Thumbnail
        avatar={ data.store.avatar }
        username={ data.store.username }
        info={`${data.products.length} items in basket`}
        text="£100"
        />
      <DefaultView style={{ marginLeft: 24, marginBottom: 32 }}>
        <FlatList
          horizontal={true}
          scrollEnabled={ data.products.length > 2 ? true : false }
          data={data.products}
          renderItem={renderItem}
          keyExtractor={(item: any) => item._id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </DefaultView>
      <Button large title="Checkout"
        onPress={() => navigation.navigate(RootScreenName.CHECKOUT)}
      />
    </DefaultView>
  )
}

