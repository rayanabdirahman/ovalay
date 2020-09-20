import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, Feather } from '@expo/vector-icons'
import { View as DefaultView, Button  } from 'react-native'

// set bottom tab navigatior options
const tabBarOptions = {
  activeTintColor: '#2b292d',
  inactiveTintColor: '#BFC5D2',
  style: { backgroundColor: '#fff' }
}

const PlaceHolderScreen = ({ navigation }: any) => (
  <DefaultView style={{ flex: 1, backgroundColor: 'white', justifyContent: "center" }}>
    <Button title="Login" onPress={() => navigation.navigate('Profile')} />
  </DefaultView>
)

const BottomTab = createBottomTabNavigator()
export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Feed" tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name="Feed"
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="earth" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name="Search"
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name="Cart"
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name="Profile"
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> 
        }} 
      />
    </BottomTab.Navigator>
  )
}

const Stack = createStackNavigator()
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}
