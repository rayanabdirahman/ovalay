import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Landing, SignUp, SignIn } from '../screens'
import { AuthScreenName, AuthStackParamList } from './types'

const AuthenticationStack = createStackNavigator<AuthStackParamList>()
export default function AuthNavigator () {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={AuthScreenName.LANDING} component={Landing}/>
      <AuthenticationStack.Screen name={AuthScreenName.SIGN_IN} component={SignIn}/>
      <AuthenticationStack.Screen name={AuthScreenName.SIGN_UP} component={SignUp}/>
    </AuthenticationStack.Navigator>
  )
}
