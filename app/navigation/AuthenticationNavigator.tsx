import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticationStackParamList } from '../types'
import { AuthenticationScreenName } from '../constants/ScreenNames'
import { LoginScreen, SignUpScreen } from '../screens/Authentication'

// Root Authentication stack navigation
// These screens will display when user has not signed in
const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>()
export default function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name={AuthenticationScreenName.LOGIN} component={LoginScreen} options={{ headerShown: false }}/>
      <AuthenticationStack.Screen name={AuthenticationScreenName.SIGN_UP} component={SignUpScreen} options={{ headerTitle: "", headerBackTitle: " " }}/>
    </AuthenticationStack.Navigator>
  )
}