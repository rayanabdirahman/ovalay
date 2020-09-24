import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView, Button, Text } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'

const Landing = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.LANDING>) => (
  <DefaultView style={{ flex: 1, backgroundColor: 'white', justifyContent: "center" }}>
    <Text>Landing</Text>
    <Button title="Sign up with email" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
    <Button title="Sign in" onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
  </DefaultView>
)

export { Landing }