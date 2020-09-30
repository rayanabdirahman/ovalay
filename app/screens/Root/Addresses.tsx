import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review } from '../../components'

const Addresses = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.ADDRESSES>) => (
  <Layout title="Addresses">
    <Link title="Add a new Address" onPress={() => navigation.navigate(RootScreenName.ADDRESSES)} />
  </Layout>
)

export { Addresses }