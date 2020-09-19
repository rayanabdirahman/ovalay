import React from 'react'
import { FlatList } from 'react-native'
import { Layout } from '../../components/Layout'
import { SearchBar } from '../../components/Input'
import { Thumbnail } from '../../components/Thumbnail'
import { users } from '../../temp/data'

export default function Search() {
  const renderItem = ({ item }: any) => (
    <Thumbnail 
      source={{ uri: item.image}}
      name={item.name}
      subtitle={`@${item.username}`} />
  )

  return (
    <Layout fullwidth>
      <SearchBar placeholder="Search" />
      <FlatList 
        data={users}
        renderItem={renderItem}
        keyExtractor={(item: any) => item._id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  )
}
