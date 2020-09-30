import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const AddAddress = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.ADDRESSES>) => (
  <Layout title="Add Address">
    <ScrollView>
      <Input placeholder="Full name" />
      <Input placeholder="Phone number" />
      <Input placeholder="Post code" />
      <Input placeholder="Address line 1" />
      <Input placeholder="Address line 2 (optional)" />
      <Input placeholder="Town/City" />
      <Input placeholder="County" />
    </ScrollView>
    <Button large title="Add address" onPress={() => alert('Add address')} />
  </Layout>
)

export { AddAddress }