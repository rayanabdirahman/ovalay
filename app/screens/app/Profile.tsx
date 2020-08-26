import React from 'react'
import { View as DefaultView, TouchableOpacity, FlatList } from 'react-native'
import { Thumbnail } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { Layout } from '../../components/Layout'
import { ScreenTitle } from '../../components/Text'
import { Text } from '../../components/Text'
import { user } from '../../temp/data'
import { theme } from '../../components/Theme'
import { Button } from '../../components/Button'

const list = [
  {
    _id: '10001',
    name: 'Orders',
    icon: 'shoppingcart'
  },
  {
    _id: '10002',
    name: 'Wishlist',
    icon: 'hearto'
  },
  {
    _id: '10003',
    name: 'Settings',
    icon: 'setting'
  }
]

export default function Profile() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => alert(item.name)}>
      <DefaultView style={{ marginBottom: 48, flexDirection: "row", alignContent: "center", justifyContent: "space-between"}}>
        <DefaultView style={{ flexDirection: "row" }}>
          <AntDesign style={{ marginRight: 16 }} name={item.icon} size={24} color={theme.colour.black}/> 
          <Text>{ item.name }</Text>
        </DefaultView>
        <AntDesign name="right" size={20} color={theme.colour.lightgrey}/> 
      </DefaultView>
    </TouchableOpacity>
  )
  return (
    <Layout fullwidth>
      <DefaultView style={{ marginBottom: 48}}>
        <DefaultView style={{ marginBottom: 32, flexDirection: "row", alignContent: "center", justifyContent: "space-between" }}>
          <ScreenTitle>Profile</ScreenTitle>
          <TouchableOpacity onPress={() => alert('profile')}>
            <Thumbnail small source={{ uri: user.image}} />
          </TouchableOpacity>
        </DefaultView>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item: any) => item._id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </DefaultView>
      <Button secondary title="Logout" onPress={() => alert('Logout')} />
    </Layout>
  )
}
