import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Navigation from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './components/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation isUserAuthenticated={true}  />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default () => (
  <App />
)
