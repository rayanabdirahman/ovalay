import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link } from '../../components'

const SignUp = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>) => (
  <Layout title="Sign up">
    <DefaultView style={{ marginBottom: 24 }}>
      <Text>Create an account so you can shop your favourite stores from one place</Text>
    </DefaultView>

    <DefaultView>
      <Button large title="Create an account" onPress={() => alert('Account created')} />
      <DefaultView style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Text>Already have an account?</Text>
        <Link title="Sign in" onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
      </DefaultView>
    </DefaultView>
  </Layout>
)

export { SignUp }