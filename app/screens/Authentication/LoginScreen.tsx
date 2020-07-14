import React from 'react'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { AuthenticationStackParamList } from '../../types'
import { Layout, LayoutProps } from '../../components/Layout'
import { AuthenticationScreenName } from '../../constants/ScreenNames'

type Props = LayoutProps & {
  navigation: StackScreenProps<AuthenticationStackParamList, AuthenticationScreenName.LOGIN>
}

export const LoginScreen = (props: Props) => {
  return (
    <Layout {...props} fullwidth={true} background={'blue'}>
      <Text>This screen LoginScreen</Text>
    </Layout>
  )
}
