import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenticationNavigator from './Authentication'
import RootNavigator from './Root'

type NavigationContainerParams = {
  isUserAuthenticated: boolean
}

export default function Navigation({ isUserAuthenticated }: NavigationContainerParams) {
  return (
    <NavigationContainer>
      {isUserAuthenticated ? <RootNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  )
}