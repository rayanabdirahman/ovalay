import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/app/Search'
import { RootStackParamList, RootNavigationScreenName } from './types'
import { theme } from '../components/Theme'
import BottomTabNavigator from './BottomTab'
import Product from '../screens/app/Product'


// Root navigation stack to display root screens
const RootStack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{  headerShown: false, animationEnabled: false }} mode="modal">
      <RootStack.Screen name={RootNavigationScreenName.ROOT} component={BottomTabNavigator} />
      <RootStack.Screen name={RootNavigationScreenName.PRODUCT} component={Product} options={{ 
        headerShown: true,
        headerBackTitle: " ",
        title: " ",
        headerTintColor: theme.colour.black 
      }}/>
      <RootStack.Screen name={RootNavigationScreenName.SEARCH_MODAL} component={Search} />
    </RootStack.Navigator>
  )
}
