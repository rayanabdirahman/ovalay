import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'
import BottomTabNavigator from './BottomTabNavigator'
import { View, Text, Button } from 'react-native'
import { AddProductNavigator } from './ScreenNavigator'

// set root navigator header options
const options = {
  title: '',
  headerShown: false,
  headerBackTitle: ' ',
  headerTintColor: theme.colour.black,
  headerStyle: { shadowOpacity: 0 },
  screenOptions: { animationEnabled: false },
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "red" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const Stack = createStackNavigator<RootStackParamList>()
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={options} mode="modal">
      <Stack.Screen name={RootScreenName.ROOT} component={BottomTabNavigator} />
      <Stack.Screen
        name={RootScreenName.ADD_PRODUCT}
        options={{ animationEnabled: true }}
        component={AddProductNavigator}
      />
    </Stack.Navigator>
  )
}
