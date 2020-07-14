import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import Navigation from './navigation'
import { theme } from './components/Themed'
import { store } from './store'

function App() {
  const isLoadingComplete = true
  const isUserAuthenticated = false

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation isUserAuthenticated={isUserAuthenticated}  />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}

// Provider component provides access to application state
// ThemeProvider component provideds access to styled component themes
export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)