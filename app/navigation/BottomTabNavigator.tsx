import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Feather } from '@expo/vector-icons'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'
import { AddProductNavigator, CartNavigator, FeedNavigator, ProfileNavigator, SearchNavigator } from './ScreenNavigator'

// set bottom tab navigator options
const tabBarOptions = {
  activeTintColor: theme.colour.black,
  inactiveTintColor: '#BFC5D2',
  style: { backgroundColor: theme.colour.white },
  showLabel: false
}

const BottomTab = createBottomTabNavigator<RootStackParamList>()
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RootScreenName.FEED} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={RootScreenName.FEED}
        component={FeedNavigator}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="earth" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.SEARCH}
        component={SearchNavigator}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
        }} 
      />
      { 
      }
      <BottomTab.Screen name={RootScreenName.ADD_PRODUCT}
        component={AddProductNavigator}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="plussquareo" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.CART}
        component={CartNavigator}
        options={{ 
          tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.PROFILE}
        component={ProfileNavigator}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> 
        }} 
      />
    </BottomTab.Navigator>
  )
}
