import React, { useState } from 'react'
import { Form } from 'native-base'
import { Input } from './Input'
import { Text } from './Text'
import { Button } from './Button'
import { SignUpModel } from '../api/types'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../store/actions/authentication'

export const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (): Promise<void> => {
    const model: SignUpModel = { username, firstName, lastName, email, password }
    dispatch(signUpUser(model)) // dispatch signup user action
  }

  return (
    <React.Fragment>
      <Text h1>Create Account</Text>
      <Form>
        <Input placeholder={"Username"} onChangeText={(text: string) => setUsername(text)} />
        <Input placeholder="First Name" onChangeText={(text: string) => setFirstName(text)} />
        <Input placeholder="Last Name" onChangeText={(text: string) => setLastName(text)} />
        <Input placeholder={"Email"} onChangeText={(text: string) => setEmail(text)} />
        <Input placeholder={"Password"} onChangeText={(text: string) => setPassword(text)} secureTextEntry />
      </Form>
      <Button primary title={"Sign up"}  onPress={handleSubmit}></Button>
    </React.Fragment>
  )
}
