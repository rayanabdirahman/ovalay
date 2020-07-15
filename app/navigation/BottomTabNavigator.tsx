import React from 'react'
import { Image, ImageProps } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../types'
import { RootScreenName } from './ScreenNames'
import { ExploreScreen, SearchScreen, WishListScreen, ProfileScreen } from '../screens/Root'
import { theme } from '../components/Themed'

// Component to display navigation icons using Image component 
function TabBarIcon({ image, color }: { image: ImageProps; color: string }) {
  return <Image source={image} style={{ height: 24, width: 24, tintColor: color }} resizeMode="contain"/>
}

// set bottom tab navigatior options
const tabBarOptions = {
  activeTintColor: theme.colour.blue,
  inactiveTintColor: theme.colour.lightgrey,
  style: { backgroundColor: theme.colour.white }
}

// Bottom tab navigatior
// These screens will display when user has signed in
const BottomTab = createBottomTabNavigator<BottomTabParamList>()
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={RootScreenName.EXPLORE} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen
        name={RootScreenName.EXPLORE}
        component={ExploreScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/basket.png')} color={color} /> 
        }} 
      />

      <BottomTab.Screen
        name={RootScreenName.SEARCH}
        component={SearchScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/search.png')} color={color} />
        }}
      />

      <BottomTab.Screen
        name={RootScreenName.WISHLIST}
        component={WishListScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/heart.png')} color={color} />
        }}
      />

      <BottomTab.Screen
        name={RootScreenName.PROFILE}
        component={ProfileScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/person.png')} color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}