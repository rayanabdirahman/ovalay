import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FeedScreenStackParamList } from './types'
import { FeedScreenName } from './ScreenNames'
import { FeedScreen, ProductScreen } from '../screens/Root'

// Root Feed stack navigation
// These screens will display when user is on the feed screen
const FeedScreenStack = createStackNavigator<FeedScreenStackParamList>()
export default function FeedScreenNavigator() {
  return (
    <FeedScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedScreenStack.Screen name={FeedScreenName.FEED} component={FeedScreen}/>
      <FeedScreenStack.Screen name={FeedScreenName.PRODUCT} component={ProductScreen}/>
    </FeedScreenStack.Navigator>
  )
}