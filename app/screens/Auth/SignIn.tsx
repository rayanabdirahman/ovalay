import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView, Button, Text } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'

const SignIn = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_IN>) => (
  <DefaultView style={{ flex: 1, backgroundColor: 'white', justifyContent: "center" }}>
    <Text>SignIn</Text>
    <Button title="Sign in" onPress={() => alert('User signed in')} />
    <Button title="Sign up" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
  </DefaultView>
)

export { SignIn }