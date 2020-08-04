import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { BottomTabParamList } from '../../navigation/types'
import { RootScreenName } from '../../navigation/ScreenNames'
import { Layout, ContentContainer, Text, Button } from '../../components'
import { logoutUser } from '../../store/actions/authentication'
import { useDispatch } from 'react-redux'

export const ProfileScreen = ({
  navigation,
}: StackScreenProps<BottomTabParamList, RootScreenName.PROFILE>) => {
  const dispatch = useDispatch()
  return (
    <Layout fullwidth>
      <ContentContainer>
        <Text h1>Profile</Text>
        <Button title="Logout" onPress={() => dispatch(logoutUser())} />
      </ContentContainer>
    </Layout>
  )
}
