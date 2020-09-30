import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Input, Thumbnail } from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Search = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.SEARCH>) => (
  <Layout>
    <Input style={{ marginBottom: 24 }} placeholder="Search" />
    <DefaultView style={{ marginBottom: 32 }}>
      <Text bold>Products</Text>
      <TouchableOpacity onPress={() => navigation.push(RootScreenName.SEARCH_RESULT)}>
        <Text>#airmax</Text>
      </TouchableOpacity>
      <Text>#nike</Text>
      <Text>jordan 1</Text>
    </DefaultView>

    <DefaultView>
      <Text bold>Stores</Text>
      <Thumbnail
        onPress={() => navigation.push(RootScreenName.STORE)}
        avatar="https://dummyimage.com/150x150/c4c4c4/c4c4c4"
        username="Footlocker"
        info="@footlocker"
        />
      <Thumbnail
        avatar="https://dummyimage.com/150x150/c4c4c4/c4c4c4"
        username="Nike"
        info="@nike"
        />
      <Thumbnail
        avatar="https://dummyimage.com/150x150/c4c4c4/c4c4c4"
        username="JD Sport"
        info="@jdsport"
        />
    </DefaultView>
  </Layout>
)

export { Search }