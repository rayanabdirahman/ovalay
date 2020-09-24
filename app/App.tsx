import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
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

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
