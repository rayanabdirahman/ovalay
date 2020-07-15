import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import Navigation from './navigation'
import { theme } from './components/Themed'
import { store } from './store'

// ThemeProvider component provideds access to styled component theme
function App() {
  const isUserAuthenticated = false
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation isUserAuthenticated={isUserAuthenticated}  />
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

// Provider component provides access to application state
export default () => (
  <Provider store={store}>
      <App />
  </Provider>
)