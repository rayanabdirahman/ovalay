import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid } from '../../components'

const Product = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.SEARCH_RESULT>) => (
  <Layout title="Product">
  </Layout>
)

export { Product }