import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review } from '../../components'

const Settings = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.SETTINGS>) => (
  <Layout title="Settings">
    <Link title="Addresses" onPress={() => alert('address')} />
  </Layout>
)

export { Settings }