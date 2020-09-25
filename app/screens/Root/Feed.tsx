import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'

const Feed = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.FEED>) => (
  <Layout title="Feed">

  </Layout>
)

export { Feed }