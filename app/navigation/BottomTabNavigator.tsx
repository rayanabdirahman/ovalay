import React from 'react'
import { Image, ImageProps } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../types'
import { RootScreenName } from '../constants/ScreenNames'
import { ExploreScreen, SearchScreen, WishListScreen, ProfileScreen } from '../screens/Root'

function TabBarIcon({ image, color }: { image: ImageProps; color: string }) {
  return <Image source={image} style={{ height: 24, width: 24, tintColor: color }} resizeMode="contain"/>
}

// Bottom tab navigatior
// These screens will display when user has signed in
const BottomTab = createBottomTabNavigator<BottomTabParamList>()
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBarOptions={{ activeTintColor: '#0046FF', inactiveTintColor: '#BFC5D2', style: { backgroundColor: '#fff' }}}>
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