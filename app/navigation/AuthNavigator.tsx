import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View as DefaultView, Button  } from 'react-native'

const PlaceHolderScreen = ({ navigation }: any) => (
  <DefaultView style={{ flex: 1, backgroundColor: 'white', justifyContent: "center" }}>
    <Button title={"placeholder"} onPress={() => navigation.navigate('Profile')} />
  </DefaultView>
)

const AuthenticationStack = createStackNavigator()
export default function AuthNavigator () {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={"Landing"} component={PlaceHolderScreen}/>
      <AuthenticationStack.Screen name={"SignIn"} component={PlaceHolderScreen}/>
      <AuthenticationStack.Screen name={'SingUp'} component={PlaceHolderScreen}/>
    </AuthenticationStack.Navigator>
  )
}
