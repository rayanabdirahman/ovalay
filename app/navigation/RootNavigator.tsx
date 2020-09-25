import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, Feather } from '@expo/vector-icons'
import { View as DefaultView, Button  } from 'react-native'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'

// set bottom tab navigatior options
const tabBarOptions = {
  activeTintColor: theme.colour.black,
  inactiveTintColor: '#BFC5D2',
  style: { backgroundColor: theme.colour.white }
}

const PlaceHolderScreen = ({ navigation }: any) => (
  <DefaultView style={{ flex: 1, backgroundColor: 'white', justifyContent: "center" }}>
    <Button title="Login" onPress={() => navigation.navigate('Profile')} />
  </DefaultView>
)

const BottomTab = createBottomTabNavigator<RootStackParamList>()
export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RootScreenName.FEED} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={RootScreenName.FEED}
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="earth" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.SEARCH}
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.CART}
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} /> 
        }} 
      />
      <BottomTab.Screen name={RootScreenName.PROFILE}
        component={PlaceHolderScreen}
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RootScreenName.ROOT} component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}
