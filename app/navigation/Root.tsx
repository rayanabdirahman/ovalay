import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons'
import Feed from '../screens/app/Feed'
import Search from '../screens/app/Search'
import Profile from '../screens/app/Profile'
import { RootStackParamList, RootNavigationScreenName } from './types'
import { theme } from '../components/Theme'
import { View as DefaultView  } from 'react-native'

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
function BottomTabNavigator() {
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

// Root navigation stack to display root screens
const RootStack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{  headerShown: false, animationEnabled: false }} mode="modal">
      <RootStack.Screen name={RootNavigationScreenName.ROOT} component={BottomTabNavigator} />
      <RootStack.Screen name={RootNavigationScreenName.SEARCH_MODAL} component={Search} />
    </RootStack.Navigator>
  )
}

