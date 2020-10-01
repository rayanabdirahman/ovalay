import React from 'react'
import { View as DefaultView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { Image } from '../../atoms/Image'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Data } from '../../../types'
import { Thumbnail } from '../Thumbnail'
import { RootScreenName } from '../../../navigation/types'

type Props = {
  data: any
}

export const CheckoutItem = ({ data }: Props) => {
  return (
    <DefaultView style={{ marginBottom: 16, flexDirection: "row" }}>
      <Image small source={{ uri: data.product.image }} />

      <DefaultView style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
        <DefaultView style={{ }}>
          <Text style={{ marginBottom: 8 }} bold>{data.product.name}</Text>
          <Text style={{ marginBottom: 8 }}>Size - {data.product.size}</Text>
          <Text style={{ marginBottom: 0 }}>Colour - {data.product.colour}</Text>
        </DefaultView>

        <Text bold>£{data.product.price}</Text>
      </DefaultView>
    </DefaultView>
  )
}

