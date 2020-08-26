import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Navigation from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function App() {
  return (
    <SafeAreaProvider>
      <Navigation isUserAuthenticated={true}  />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

export default () => (
  <App />
)
