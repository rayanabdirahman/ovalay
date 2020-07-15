import React, { useState } from 'react'
import { View } from 'react-native'
import { Form } from 'native-base'
import { Input } from './Input'
import { Text } from './Text'
import { Button } from './Button'
import { loginUser } from '../store/actions/authentication'
import { LoginModel } from '../api/types'
import { useDispatch } from 'react-redux'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (): Promise<void> => {
    const model: LoginModel = { email, password }
    dispatch(loginUser(model)) // dispatch login user action
  }

  return (
    <React.Fragment>
      <Text h1>Login</Text>
      <Form>
        <Input placeholder={"Email"} onChangeText={(text: string) => setEmail(text)} />
        <Input placeholder={"Password"} onChangeText={(text: string) => setPassword(text)} secureTextEntry />
      </Form>
      <Button secondary title={"Login"}  onPress={handleSubmit}></Button>
      <View style={{ marginBottom: 24 }}>
        <Text light>Forgot password?</Text>
      </View>
    </React.Fragment>
  )
}
