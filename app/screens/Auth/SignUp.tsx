import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { AuthScreenName, AuthStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input } from '../../components'
import { SignUpModel } from '../../domain/interfaces'
import { signUpUser } from '../../store/actions/authentication'
import { useDispatch } from 'react-redux'

const SignUp = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>) => {
  const dispatch = useDispatch()
  const [state, setState] = useState<SignUpModel>({
    name: '',
    username: '',
    email: '',
    password: '',
  })

  return (
    <Layout title="Sign up">
      <DefaultView style={{ marginBottom: 24 }}>
        <Text style={{ marginBottom: 24 }}>
          Create an account so you can shop your favourite stores from one place
        </Text>
        <Input placeholder="Username" onChangeText={(value: string) => setState({ ...state, username: value })} />
        <Input placeholder="Name" onChangeText={(value: string) => setState({ ...state, name: value })} />
        <Input placeholder="Email" onChangeText={(value: string) => setState({ ...state, email: value })} />
        <Input placeholder="Password" onChangeText={(value: string) => setState({ ...state, password: value })} />
      </DefaultView>
  
      <Button large title="Create an account" onPress={() => dispatch(signUpUser({ ...state }))} />
      <DefaultView style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Text>Already have an account?</Text>
        <Link title="Sign in" onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
      </DefaultView>
    </Layout>
  )
}

export { SignUp }
