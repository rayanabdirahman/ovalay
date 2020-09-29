import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'
import BottomTabNavigator from './BottomTabNavigator'

// set root navigator header options
const options = {
  title: '',
  headerShown: false,
  headerBackTitle: ' ',
  headerTintColor: theme.colour.black,
  headerStyle: { shadowOpacity: 0 },
}

const Stack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={RootScreenName.ROOT} component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}
