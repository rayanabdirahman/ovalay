import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'

const Profile = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.PROFILE>) => (
  <Layout title="Profile">

  </Layout>
)

export { Profile }