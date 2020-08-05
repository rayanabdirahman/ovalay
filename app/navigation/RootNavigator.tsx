import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import BottomTabNavigator from './BottomTabNavigator'
import NotFoundScreen from '../screens/NotFoundScreen'
import { ModalScreen } from '../screens/Root'
import { RootNavigatorScreenName } from './ScreenNames'

// Root stack navigatior
// screens will display when user has signed in
const Stack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RootNavigatorScreenName.ROOT} component={BottomTabNavigator} />
      <Stack.Screen
        name={RootNavigatorScreenName.NOT_FOUND}
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name={RootNavigatorScreenName.MODAL}
        component={ModalScreen}
        options={{ title: "", headerShown: true, headerBackTitle: " " }}
      />
    </Stack.Navigator>
  )
}
