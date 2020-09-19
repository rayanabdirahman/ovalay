import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { View as DefaultView  } from 'react-native'
import { RootStackParamList, RootNavigationScreenName } from './types'
import Profile from '../screens/app/Profile'
import Feed from '../screens/app/Feed'
import { theme } from '../components/Theme'

const tabBarOptions = {
  activeTintColor: theme.colour.black,
  inactiveTintColor: theme.colour.lightgrey,
  showLabel: false,
  style: { backgroundColor: theme.colour.white }
}

// override to show modal screens
const PlaceHolderScreen = () => <DefaultView style={{ flex: 1, backgroundColor: 'blue' }} />

// Bottom tab navigation for authorised users
const BottomTab = createBottomTabNavigator<RootStackParamList>()
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RootNavigationScreenName.FEED} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen name={RootNavigationScreenName.FEED}
        component={Feed}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} /> 
        }} 
      />

      <BottomTab.Screen name={RootNavigationScreenName.SEARCH}
        component={PlaceHolderScreen}
        options={{ 
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> 
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault()
            navigation.navigate(RootNavigationScreenName.SEARCH_MODAL)
          }
        })}
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
