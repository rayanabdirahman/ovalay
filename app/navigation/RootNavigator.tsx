import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, Feather } from '@expo/vector-icons'
import { View as DefaultView, Button  } from 'react-native'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'
import { Cart, Feed, Profile, Search } from '../screens'

// set root navigatior header options
const rootScreenOptions = {
  headerShown: true,
  title: " ",
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0, 
  }
}

// set bottom tab navigatior options
const tabBarOptions = {
  activeTintColor: theme.colour.black,
  inactiveTintColor: '#BFC5D2',
  style: { backgroundColor: theme.colour.white }
}

const BottomTab = createBottomTabNavigator<RootStackParamList>()
export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RootScreenName.FEED} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={RootScreenName.FEED}
        component={Feed}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="earth" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.SEARCH}
        component={Search}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.CART}
        component={Cart}
        options={{ 
          tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.PROFILE}
        component={Profile}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> 
        }} 
      />
    </BottomTab.Navigator>
  )
}

const Stack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={rootScreenOptions}>
      <Stack.Screen name={RootScreenName.ROOT} component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}
