import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import Layout from '../../components/Layouts'
import { Text } from '../../components/atoms/Text'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Input } from '../../components/atoms/Input'
import { Button } from '../../components/atoms/Button'
import TextWithLink from '../../components/organisms/TextWithLink'

export default function SignUpScreen(
  { navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>
) {
  return (
    <Layout>
      <Text title style={{ marginBottom: 8 }}>Sign up</Text>
      <Text>Create an account so you can shop your favourite stores from one place</Text>
      <Input placeholder="Username" onChangeText={(value: string) => alert("Email")} />
      <Input placeholder="Name" onChangeText={(value: string) => alert("Email")} />
      <Input placeholder="Email" onChangeText={(value: string) => alert("Email")} />
      <Input placeholder="Password" onChangeText={(value: string) => alert("Email")} />

      <Button large title="Sign up" onPress={() => alert('Sing in')} />
      <TextWithLink
        text="Already have an account?"
        linkTitle="Sign in"
        navigateTo={() => navigation.navigate(AuthScreenName.SIGN_IN)}/>
    </Layout>
  )
}