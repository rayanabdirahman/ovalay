import React from 'react'
import { ScreenTitle } from '../../components/Text'
import { Layout } from '../../components/Layout'
import { FlatList } from 'react-native'
import { orders } from '../../temp/data'
import { Card } from '../../components/Card'

export default function Feed() {
  const renderItem = ({ item }: any) => <Card data={item} />
  return (
    <Layout fullwidth>
      <FlatList 
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item: any) => item._id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  )
}
