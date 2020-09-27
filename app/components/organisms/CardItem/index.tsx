import React from 'react'
import { View as DefaultView, FlatList } from 'react-native'
import { Thumbnail } from 'native-base'
import styled from 'styled-components/native'
import { Text } from '../../atoms/Text'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'
import { Data } from '../../../types'

type Props = {
  data: Data
}


const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  /* flex: .5; */
`

export const CardItem = ({ data }: Props) => {
  const renderItem = ({ item }: any) => {
    console.log('ITEM: ', item)
    return (
        <Image small={(data.products.length > 2) ? true : false} source={{ uri: item.image }} resizeMode="cover" />
    )
  } 
  
  return (
    <DefaultView style={{ marginBottom: 32 }}>
      <DefaultView style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
        <UserContainer>
          <Thumbnail style={{ marginRight: 8 }} source={{ uri: data.store.avatar }} />
          <DefaultView style={{ flexDirection: "column" }}>
            <Text  bold style={{ marginBottom: 4 }}>{ data.store.username }</Text>
            <Text  style={{ marginBottom: 0 }}>{ data.products.length } items in basket</Text>
          </DefaultView>
        </UserContainer>
        <Text bold>£100</Text>
      </DefaultView>
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
      <Button large title="Checkout" onPress={() => alert('Checking out')} />
    </DefaultView>
  )
}

