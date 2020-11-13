import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'

import useCachedResources from './hooks/useCachedResources'

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="dark" />
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}
