import { NavigationContainer, DefaultTheme, NavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch } from 'react-redux'
import { ColorSchemeName } from 'react-native'
import * as React from 'react'

import { theme } from '../components/Theme'
import BottomTabNavigator from './BottomTabNavigator'
import CreateScreen from '../screens/CreateScreen'
import { RootStackParamList, RootStackRouteName } from './types'
import { setCurrentPath } from '../store/actions/navigation'
import AuthNavigator from './AuthNavigator'

type NavigationContainerPropsList = {
  colorScheme?: ColorSchemeName
  isUserSignedIn: boolean
}

export default function Navigation({ colorScheme, isUserSignedIn }: NavigationContainerPropsList) {
  const navigationRef = React.useRef<NavigationContainerRef | any>()
  const routeNameRef = React.useRef<string>()
  const dispatch = useDispatch()

  return (
    <NavigationContainer
      // TODO: update when theme switching fucntionality is added
      theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}
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
        return routeNameRef.current = currentRouteName;
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

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator mode="modal"
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        headerTintColor: theme.colour.black 
      }}>
      <Stack.Screen name={RootStackRouteName.ROOT} component={BottomTabNavigator} />
      <Stack.Screen
        name={RootStackRouteName.CREATE_MODAL}
        options={{ 
          animationEnabled: true,
          headerShown: true,
          title: '',
          headerStyle: { 
            shadowOpacity: 0
          },
          headerBackTitle: ' '
        }}
        component={CreateScreen}
      />
    </Stack.Navigator>
  )
}
