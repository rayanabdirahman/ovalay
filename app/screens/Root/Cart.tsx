import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'

const Cart = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.CART>) => (
  <Layout title="Cart">

  </Layout>
)

export { Cart }