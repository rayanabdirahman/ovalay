import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticationStackParamList } from './types'
import { AuthenticationNavigatorScreenName } from './ScreenNames'
import { LoginScreen } from '../screens/Authentication/LoginScreen'
import { SignUpScreen } from '../screens/Authentication/SignUpScreen'

// Root Authentication stack navigation
// These screens will display when user has not signed in
const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>()
export default function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={AuthenticationNavigatorScreenName.LOGIN} component={LoginScreen}/>
      <AuthenticationStack.Screen name={AuthenticationNavigatorScreenName.SIGN_UP} component={SignUpScreen}/>
    </AuthenticationStack.Navigator>
  )
}