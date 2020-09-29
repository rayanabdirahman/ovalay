import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'
import { Cart, Feed, Profile, Search, Store } from '../screens'

// set stack navigator options
const options = {
  title: '',
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colour.black,
  headerStyle: { shadowOpacity: 0 },
}

const FeedStack = createStackNavigator<RootStackParamList>()
export function FeedNavigator () {
  return (
    <FeedStack.Navigator screenOptions={options}>
      <FeedStack.Screen name={RootScreenName.FEED} component={Feed}/>
    </FeedStack.Navigator>
  )
}

const SearchStack = createStackNavigator<RootStackParamList>()
export function SearchNavigator () {
  return (
    <SearchStack.Navigator screenOptions={options}>
      <SearchStack.Screen name={RootScreenName.SEARCH} component={Search}/>
      <SearchStack.Screen name={RootScreenName.STORE} component={Store}/>
    </SearchStack.Navigator>
  )
}

const CartStack = createStackNavigator<RootStackParamList>()
export function CartNavigator () {
  return (
    <CartStack.Navigator screenOptions={options}>
      <CartStack.Screen name={RootScreenName.CART} component={Cart}/>
    </CartStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<RootStackParamList>()
export function ProfileNavigator () {
  return (
    <ProfileStack.Navigator screenOptions={options}>
      <ProfileStack.Screen name={RootScreenName.PROFILE} component={Profile}/>
    </ProfileStack.Navigator>
  )
}
