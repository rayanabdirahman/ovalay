import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link } from '../../components'

const SignIn = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_IN>) => (
  <Layout title="Welcome back!">
    <DefaultView style={{ marginBottom: 24 }}>
      <Text>Sign in to your account</Text>
    </DefaultView>

    <DefaultView>
      <Button large title="Sign in" onPress={() => alert('User signed in')} />
      <DefaultView style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Text>Don’t have an account?</Text>
        <Link title="Sign up" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
      </DefaultView>
    </DefaultView>
  </Layout>
)

export { SignIn }