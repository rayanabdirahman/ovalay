import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'

const AddProduct = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.ADD_PRODUCT>) => (
  <Layout title="AddProduct">

  </Layout>
)

export { AddProduct }