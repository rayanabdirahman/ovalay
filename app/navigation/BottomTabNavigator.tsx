import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../types';
import { RootScreenName } from '../constants/ScreenNames';
import { ExploreScreen } from '../screens/Root';

// Bottom tab navigatior
// These screens will display when user has signed in
const BottomTab = createBottomTabNavigator<BottomTabParamList>()
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={RootScreenName.EXPLORE} component={ExploreScreen}/>
    </BottomTab.Navigator>
  )
}