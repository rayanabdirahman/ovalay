import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons'
import Feed from '../screens/app/Feed'
import Search from '../screens/app/Search'
import Profile from '../screens/app/Profile'

const tabBarOptions = {
  activeTintColor: '#2b292d',
  inactiveTintColor: '#BFC5D2',
  style: { backgroundColor: '#FFF' }
}

const BottomTab = createBottomTabNavigator()
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={'Feed'} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={'Feed'}
          component={Feed}
          options={{ 
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} /> 
          }} 
        />
      <BottomTab.Screen name={'Search'}
          component={Search}
          options={{ 
            tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
          }} 
        />
      <BottomTab.Screen name={'WishList'}
          component={Search}
          options={{ 
            tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} /> 
          }} 
        />
      <BottomTab.Screen name={'Profile'}
          component={Profile}
          options={{ 
            tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> 
          }} 
        />
    </BottomTab.Navigator>
  )
}

const RootStack = createStackNavigator()
export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={'Root'} component={BottomTabNavigator} />
    </RootStack.Navigator>
  )
}

