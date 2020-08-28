import React from 'react'
import { View as DefaultView, FlatList } from 'react-native'
import { Thumbnail } from 'native-base'
import { Layout } from '../../components/Layout'
import { SearchBar } from '../../components/Input'
import { Text } from '../../components/Text'
import { users } from '../../temp/data'

export default function Search() {
  const renderItem = ({ item }: any) => {
    return (
      <DefaultView style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
        <Thumbnail source={{ uri: item.image}} />
        <DefaultView style={{ marginLeft: 8 }}>
          <Text bold>{item.name}</Text>
          <Text light>@{item.username}</Text>
        </DefaultView>
      </DefaultView>
    )
  }

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
