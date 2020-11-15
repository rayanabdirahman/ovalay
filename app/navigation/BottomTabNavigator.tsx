import { AntDesign, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

// import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import CartScreen from '../screens/CartScreen'
import FeedScreen from '../screens/FeedScreen'
import ShareScreen from '../screens/ShareScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import { BottomTabParamList, BottomTabRouteName, FeedParamList, FeedTabRouteName, SearchParamList, SearchTabRouteName } from './types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

// TODO: Refactor to DRY
export default function BottomTabNavigator() {
  const isUserSeller = true

  const SellerNavigation = () => (
    <BottomTab.Navigator
      initialRouteName={BottomTabRouteName.FEED}
      tabBarOptions={{ 
        activeTintColor: '#020311',
        inactiveTintColor: '#BFC5D2',
        showLabel: false
      }}>
      <BottomTab.Screen
        name={BottomTabRouteName.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="earth" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.SEARCH}
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="search1" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.SHARE}
        component={ShareScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="plussquareo" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon type="Feather" name="shopping-bag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )

  const BuyerNavigation = () => (
    <BottomTab.Navigator
      initialRouteName={BottomTabRouteName.FEED}
      tabBarOptions={{ 
        activeTintColor: '#020311',
        inactiveTintColor: '#BFC5D2',
        showLabel: false
      }}>
      <BottomTab.Screen
        name={BottomTabRouteName.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="earth" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.SEARCH}
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="search1" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon type="Feather" name="shopping-bag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )

  return (
    isUserSeller ? SellerNavigation() : BuyerNavigation()
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string, color: string, type?: string }) {
  return props.type === "Feather" ?
    <Feather size={24} style={{ marginBottom: -3 }} {...props} /> :
    <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedStack = createStackNavigator<FeedParamList>()

function FeedNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name={FeedTabRouteName.FEED_SCREEN}
        component={FeedScreen}
        options={{ headerShown: false }}
      />
    </FeedStack.Navigator>
  )
}

const SearchStack = createStackNavigator<SearchParamList>()

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={SearchTabRouteName.SEARCH_SCREEN}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  )
}
