import React from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import AuthenticationNavigator from './AuthenticationNavigator'
import RootNavigator from './RootNavigator'

type NavigationContainerParamsList = {
  colorScheme?: ColorSchemeName
  isUserAuthenticated: boolean
}

// Navigation container to determin which navigation screens to show
export default function Navigation({
  colorScheme,
  isUserAuthenticated
}: NavigationContainerParamsList) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isUserAuthenticated ? <RootNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  )
}
