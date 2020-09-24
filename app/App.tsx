import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter'
import Navigation from './navigation'
import { store, State } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation isUserSignedIn={false}  />
    </SafeAreaProvider>
  )
}

export default () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black,
  });

  return(
    <Provider store={store}>
      { fontsLoaded ? <App /> : <Text>App loading</Text> }
    </Provider>
  )
}
