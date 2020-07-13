import React from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../types';
import NotFoundScreen from '../screens/NotFoundScreen';
import AuthenticationNavigator from './AuthenticationNavigator';
import BottomTabNavigator from './BottomTabNavigator';

type NavigationContainerParamsList = {
  colorScheme?: ColorSchemeName,
  isUserAuthenticated: boolean
}

export default function Navigation({ colorScheme, isUserAuthenticated }: NavigationContainerParamsList) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      { isUserAuthenticated ? <RootNavigator /> : <AuthenticationNavigator /> }
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}