import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { BottomTabParamList } from '../../navigation/types'
import { BottomNavigatorScreenName } from '../../navigation/ScreenNames'
import { Layout } from '../../components/Layout'
import { ContentContainer } from '../../components/Layout'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { logoutUser } from '../../store/actions/authentication'
import { useDispatch } from 'react-redux'

export const ProfileScreen = ({
  navigation,
}: StackScreenProps<BottomTabParamList, BottomNavigatorScreenName.PROFILE>) => {
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
