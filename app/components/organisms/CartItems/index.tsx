import React from 'react'
import { FlatList } from 'react-native'
import { CardItem } from '../CardItem'
import { Data } from '../../../types'

type Props = {
  data: Data[]
}

const CartItems: React.FunctionComponent<Props>= ({ data }) => {
  const renderItem = ({item}: any) => <CardItem data={item} />
  return (
    <>  
      <FlatList
        horizontal={false}
        scrollEnabled={ data.length > 2 ? true : false }
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item._id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export { CartItems }
