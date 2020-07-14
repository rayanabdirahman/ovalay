import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticationStackParamList } from '../types'
import { AuthenticationScreenName } from '../constants/ScreenNames'
import { LoginScreen, SignUpScreen } from '../screens/Authentication'

// Root Authentication stack navigatior
// These screens will display when user has not signed in
const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>()
export default function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={AuthenticationScreenName.LOGIN} component={LoginScreen}/>
      <AuthenticationStack.Screen name={AuthenticationScreenName.SIGN_UP} component={SignUpScreen}/>
    </AuthenticationStack.Navigator>
  )
}