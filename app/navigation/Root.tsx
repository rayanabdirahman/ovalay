import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons'
import Feed from '../screens/app/Feed'
import Search from '../screens/app/Search'
import Profile from '../screens/app/Profile'
import { RootStackParamList, RootNavigationScreenName } from './types'
import { theme } from '../components/Theme'

const tabBarOptions = {
  activeTintColor: theme.colour.black,
  inactiveTintColor: theme.colour.lightgrey,
  style: { backgroundColor: theme.colour.white }
}

// Bottom tab navigation for authorised users
const BottomTab = createBottomTabNavigator<RootStackParamList>()
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={'Feed'} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={RootNavigationScreenName.FEED}
        component={Feed}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootNavigationScreenName.SEARCH}
        component={Search}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootNavigationScreenName.WISH_LIST}
        component={Search}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootNavigationScreenName.PROFILE}
        component={Profile}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> 
        }} 
      />
    </BottomTab.Navigator>
  )
}

// Root navigation stack to display root screens
const RootStack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootNavigationScreenName.ROOT} component={BottomTabNavigator} />
    </RootStack.Navigator>
  )
}

