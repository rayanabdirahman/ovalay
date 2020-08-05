import React from 'react'
import { Image, ImageProps } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from './types'
import { BottomNavigatorScreenName } from './ScreenNames'
import { SearchScreen, WishListScreen, ProfileScreen, FeedScreen } from '../screens/Root'
import { theme } from '../components/Themed'
// import FeedScreenNavigator from './FeedScreenNavigator'

// Component to display navigation icons using Image component 
function TabBarIcon({ image, color }: { image: ImageProps; color: string }) {
  return <Image source={image} style={{ height: 24, width: 24, tintColor: color }} resizeMode="contain"/>
}

// set bottom tab navigatior options
const tabBarOptions = {
  activeTintColor: theme.colour.black,
  inactiveTintColor: theme.colour.lightgrey,
  style: { backgroundColor: theme.colour.white }
}

// Bottom tab navigatior
// These screens will display when user has signed in
const BottomTab = createBottomTabNavigator<BottomTabParamList>()
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={BottomNavigatorScreenName.FEED} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen
        name={BottomNavigatorScreenName.FEED}
        component={FeedScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/basket.png')} color={color} /> 
        }} 
      />

      <BottomTab.Screen
        name={BottomNavigatorScreenName.SEARCH}
        component={SearchScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/search.png')} color={color} />
        }}
      />

      <BottomTab.Screen
        name={BottomNavigatorScreenName.WISHLIST}
        component={WishListScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/heart.png')} color={color} />
        }}
      />

      <BottomTab.Screen
        name={BottomNavigatorScreenName.PROFILE}
        component={ProfileScreen}
        options={{ 
          tabBarIcon: ({ color }) => <TabBarIcon image={require('../assets/icons/person.png')} color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}