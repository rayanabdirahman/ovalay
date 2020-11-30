import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../screens/Auth/Landing'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import { AuthScreenName, AuthStackParamList } from './types'
import { theme } from '../components/Theme'
import { UserRolesEnum } from '../domain/enums'

const options = {
  title: '',
  headerShown: true,
  headerBackTitle: ' ',
  headerTintColor: theme.colour.black,
  headerStyle: { shadowOpacity: 0 },
}

const AuthenticationStack = createStackNavigator<AuthStackParamList>()
export default function AuthNavigator () {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={AuthScreenName.LANDING} component={Landing}/>
      <AuthenticationStack.Screen name={AuthScreenName.SIGN_IN} component={SignIn} options={options}/>
      <AuthenticationStack.Screen
        name={AuthScreenName.SIGN_UP}
        initialParams={{ userRole: UserRolesEnum.BUYER }}
        component={SignUp}
        options={options}/>
    </AuthenticationStack.Navigator>
  )
}
