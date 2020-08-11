import React from 'react'
import { FlatList } from 'react-native'
import { CardItem } from './CardItem'

type Props = {
  list: any[]
}

export const CardList: React.FunctionComponent<Props> = ({ list }) => {
  const renderItem = ({ item }: any) => {
    return <CardItem data={item} />
  }

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item: any) => item._id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      />
  )
}
