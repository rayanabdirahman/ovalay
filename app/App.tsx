import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './components/Theme'
import Navigation from './navigation'
import { store, State } from './store'

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation isUserSignedIn={true}  />
    </SafeAreaProvider>
  )
}

export default () => {
  // load custom google font: Inter
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black,
  });

  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        { fontsLoaded ? <App /> : <Text>App loading</Text> }
      </ThemeProvider>
    </Provider>
  )
}
