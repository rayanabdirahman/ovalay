import * as React from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme, NavigationContainerRef } from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import { useDispatch } from 'react-redux'
import RootNavigator from './RootNavigator'
import AuthNavigator from './AuthNavigator'
import { setCurrentPath } from '../store/actions/navigation'

type NavigationContainerParamsList = {
  colorScheme?: ColorSchemeName
  isUserSignedIn: boolean
}

/**
 * Navigation container to toggle between RootNavigation and Auth navigation
 * Also handles screen tracking
 * @param { ColorSchemeName } colorScheme - toggles between dark and light mode
 */
const Navigation = ({ colorScheme, isUserSignedIn }: NavigationContainerParamsList) => {
  const navigationRef = React.useRef<NavigationContainerRef | any>()
  const routeNameRef = React.useRef<string>()
  const dispatch = useDispatch()

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}   
      onStateChange={() => {
        // functionality for screen tracking
        const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef.current.getCurrentRoute().name

        if (previousRouteName !== currentRouteName) {
          dispatch(setCurrentPath(previousRouteName, currentRouteName))
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}>
      
      {/*
      * Check if user is authenticated
      * Show authentication screens if false
      * Show Root screen if true
      */}
      { isUserSignedIn ?  <RootNavigator /> : <AuthNavigator /> }
     
    </NavigationContainer>
  )
}

export default Navigation
