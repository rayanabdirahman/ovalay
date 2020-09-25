import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Layout, Button, Text, Link } from '../../components'

const Landing = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.LANDING>) => (
  <Layout>
    <DefaultView style={{ display: "flex", flex: 1 }}></DefaultView>
    
    <DefaultView style={{ display: "flex", flex: 0.3 }}>
      <Button large title="Sign up with email" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
      <DefaultView style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Text>Already have an account?</Text>
        <Link title="Sign in" onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
      </DefaultView>
    </DefaultView>
  </Layout>
)

export { Landing }