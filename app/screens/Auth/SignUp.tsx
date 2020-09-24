import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView, Button, Text } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'

const SignUp = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>) => (
  <DefaultView style={{ flex: 1, backgroundColor: 'white', justifyContent: "center" }}>
    <Text>SignUp</Text>
    <Button title="Create an account" onPress={() => alert('Account created')} />
    <Button title="Sign in" onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
  </DefaultView>
)

export { SignUp }