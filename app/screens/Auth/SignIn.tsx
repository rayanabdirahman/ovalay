import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import Layout from '../../components/Layouts'
import { Text } from '../../components/atoms/Text'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Input } from '../../components/atoms/Input'
import { Link } from '../../components/atoms/Link'
import { Button } from '../../components/atoms/Button'
import TextWithLink from '../../components/organisms/TextWithLink'

export default function SignInScreen(
  { navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_IN>
) {
  return (
    <Layout>
      <Text title style={{ marginBottom: 8 }}>Welcome back!</Text>
      <Text>Sign in to your account</Text>
      <Input placeholder="Email" onChangeText={(value: string) => alert("Email")} />
      <Input placeholder="Password" onChangeText={(value: string) => alert("Password")} />
      <Link style={{ alignSelf: "flex-end", marginBottom: 24 }} title="Forgot password?" onPress={() => alert('Forgot password')} />
      <Button large title="Sign in" onPress={() => alert('Sing in')} />
      <TextWithLink
        text="Don’t have an account?"
        linkTitle="Sign Up"
        navigateTo={() => navigation.navigate(AuthScreenName.SIGN_UP)}/>
    </Layout>
  )
}