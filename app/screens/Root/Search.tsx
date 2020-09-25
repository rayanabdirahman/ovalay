import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Input, Thumbnail } from '../../components'

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
      <Thumbnail title="Footlocker" subHeading="@footlocker" source={{ uri: "https://dummyimage.com/150x150/c4c4c4/c4c4c4" }} />
      <Thumbnail title="Nike" subHeading="@nike" source={{ uri: "https://dummyimage.com/150x150/c4c4c4/c4c4c4" }} />
      <Thumbnail title="JD Sport" subHeading="@jdsport" source={{ uri: "https://dummyimage.com/150x150/c4c4c4/c4c4c4" }} />
    </DefaultView>
  </Layout>
)

export { Search }