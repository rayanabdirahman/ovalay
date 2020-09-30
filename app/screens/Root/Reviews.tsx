import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review } from '../../components'

const Reviews = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.REVIEW>) => (
  <Layout title="Reviews">
    <Review username="Janebrown20" comment="Loving my new trainers" />
    <Review username="Joedow12" comment="Loving my new trainers 🔥" />
    <Review username="Janebrown20" comment="Loving my new trainers" />
  </Layout>
)

export { Reviews }