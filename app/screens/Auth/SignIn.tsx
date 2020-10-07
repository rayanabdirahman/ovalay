import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'
import { useDispatch } from 'react-redux'
import { SignInModel } from '../../domain/interfaces'
import { signInUser } from '../../store/actions/authentication'

const SignIn = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_IN>) => {
  const dispatch = useDispatch()
  const [state, setState] = useState<SignInModel>({
    email: '',
    password: '',
  })

  return (
    <Layout title="Welcome back!">
      <DefaultView>
        <Text style={{ marginBottom: 24 }}>Sign in to your account</Text>
        <Input placeholder="Email" onChangeText={(value: string) => setState({ ...state, email: value })} />
        <Input placeholder="Password" onChangeText={(value: string) => setState({ ...state, password: value })} />
      </DefaultView>
  
      <DefaultView style={{ display: "flex", alignSelf: "flex-end", marginBottom: 24 }}>
        <Link title="Forgot password?" onPress={() => alert('Forgot password')} />
      </DefaultView>

      <DefaultView>
        <Button large title="Sign in" onPress={() => dispatch(signInUser({ ...state }))} />
        <DefaultView style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Text>Don’t have an account?</Text>
          <Link title="Sign up" onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
        </DefaultView>
      </DefaultView>
    </Layout>
  )
}

export { SignIn }
