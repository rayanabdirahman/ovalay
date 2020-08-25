import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/authentication/Login'
import SignUp from '../screens/authentication/SignUp'

const AuthenticationStack = createStackNavigator()
export default function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={'login'} component={Login}/>
      <AuthenticationStack.Screen name={'SignUp'} component={SignUp}/>
    </AuthenticationStack.Navigator>
  )
}