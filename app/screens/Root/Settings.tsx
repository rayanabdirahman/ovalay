import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch } from 'react-redux'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid, Thumbnail, Review } from '../../components'
import { signOutUser } from '../../store/actions/authentication'
import { ScrollView } from 'react-native-gesture-handler'

const Settings = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.SETTINGS>) => {
  const dispatch = useDispatch()
  return (
    <Layout title="Settings">
      <ScrollView>
          <Link
            style={{ marginBottom: 24 }}
            title="Addresses"
            onPress={() => navigation.navigate(RootScreenName.ADDRESSES)} />

        <DefaultView style={{ width: 150 }}>
          <Button large title="Sign Out" onPress={() => dispatch(signOutUser())} />
        </DefaultView>
      </ScrollView>
    </Layout>
  )
}

export { Settings }
