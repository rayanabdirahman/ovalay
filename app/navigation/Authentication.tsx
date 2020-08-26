import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/authentication/Login'
import SignUp from '../screens/authentication/SignUp'
import { AuthStackParamList, AuthNavigationScreenName } from './types'

// Authentication navigation stack to display auth screens
const AuthenticationStack = createStackNavigator<AuthStackParamList>()
export default function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={AuthNavigationScreenName.LOGIN} component={Login}/>
      <AuthenticationStack.Screen name={AuthNavigationScreenName.SIGN_UP} component={SignUp}/>
    </AuthenticationStack.Navigator>
  )
}