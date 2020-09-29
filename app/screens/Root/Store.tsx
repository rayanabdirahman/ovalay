import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'

const Store = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.STORE>) => (
  <Layout title="Store">

  </Layout>
)

export { Store }