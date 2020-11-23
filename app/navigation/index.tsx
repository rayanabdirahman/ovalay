import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import { theme } from '../components/Theme'
import BottomTabNavigator from './BottomTabNavigator'
import ShareScreen from '../screens/ShareScreen'
import { RootStackParamList, RootStackRouteName } from './types'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      // TODO: update when theme switching fucntionality is added
      theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <RootNavigator />
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
        name={RootStackRouteName.SHARE_MODAL}
        options={{ 
          animationEnabled: true,
          headerShown: true,
          title: '',
          headerStyle: { 
            shadowOpacity: 0
          },
          headerBackTitle: ' '
        }}
        component={ShareScreen}
      />
    </Stack.Navigator>
  )
}
