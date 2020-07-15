import React from 'react'
import { Form } from 'native-base'
import { Input } from './Input'
import { Text } from './Text'
import { Button } from './Button'
import { View } from 'react-native'

export const LoginForm = () => (
  <React.Fragment>
    <Text h1>Login</Text>
    <Form>
      <Input placeholder={"Email"} />
      <Input placeholder={"Password"} secureTextEntry />
    </Form>
    <Button secondary title={"Login"}  onPress={() => alert('Login')}></Button>
    <View style={{ marginBottom: 24 }}>
      <Text light>Forgot password?</Text>
    </View>
  </React.Fragment>
)