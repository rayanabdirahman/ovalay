import React from 'react'
import { Form } from 'native-base'
import { Input } from './Input'
import { Text } from './Text'
import { Button } from './Button'

export const SignUpForm = () => (
  <React.Fragment>
    <Text h1>Create Account</Text>
    <Form>
      <Input placeholder={"Username"} />
      <Input placeholder={"Email"} />
      <Input placeholder={"Password"} secureTextEntry />
    </Form>
    <Button primary title={"Sign up"}  onPress={() => alert('Sign up')}></Button>
  </React.Fragment>
)