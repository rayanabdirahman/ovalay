import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'

const Search = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.SEARCH>) => (
  <Layout>
    <Input style={{ marginBottom: 24 }} placeholder="Search" />
    <DefaultView style={{ marginBottom: 32 }}>
      <Text bold>Products</Text>
      <Text>#airmax</Text>
      <Text>#nike</Text>
      <Text>jordan 1</Text>
    </DefaultView>

    <DefaultView>
      <Text bold>Stores</Text>
      <Text>Footlocker</Text>
      <Text>Nike</Text>
      <Text>JD Sport</Text>
    </DefaultView>
  </Layout>
)

export { Search }