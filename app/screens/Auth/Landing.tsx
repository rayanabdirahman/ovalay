import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Layout, Button, Text, Link } from '../../components'
import { UserRolesEnum } from '../../domain/enums'

const Landing = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.LANDING>) => (
  <Layout>
    <DefaultView style={{ display: "flex", flex: 1 }}>
      <DefaultView style={{ marginTop: 80, alignItems: "center" }}>
        <Text title>mainstreet</Text>
      </DefaultView>
    </DefaultView>

    <DefaultView style={{ display: "flex", flex: 0.4 }}>
      <Button large title="Sign up to shop" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
      <Button secondary large title="Sign up as a seller" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP, { userRole: UserRolesEnum.SELLER })} />
      <DefaultView style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Text>Already have an account?</Text>
        <Link title="Sign in" onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
      </DefaultView>
    </DefaultView>
  </Layout>
)

export { Landing }