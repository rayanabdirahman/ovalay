import { View as DefaultView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import Layout from '../../components/Layouts'
import { Text } from '../../components/atoms/Text'
import { Button } from '../../components/atoms/Button'
import TextWithLink from '../../components/organisms/TextWithLink'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { UserRolesEnum } from '../../domain/enums'

export default function LandingScreen(
  { navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.LANDING>
) {
  return (
    <Layout>
      <DefaultView style={{ flex: 1 }}>
        <Text title style={{ textAlign: "center", marginTop: 24 }}>mainstreet</Text>
      </DefaultView>
      <DefaultView style={{ flex: 0.5 }}>
        <Button large title="Sign up to shop" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
        <Button
          secondary
          large
          title="Sign up as a seller"
          onPress={() => navigation.navigate(AuthScreenName.SIGN_UP, { userRole: UserRolesEnum.SELLER })} />
        <TextWithLink
          text="Already have an account?"
          linkTitle="Sign In"
          navigateTo={() => navigation.navigate(AuthScreenName.SIGN_IN)}/>
      </DefaultView>
    </Layout>
  )
}