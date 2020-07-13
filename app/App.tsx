import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import Navigation from './navigation'
import { theme } from './components/Themed'

function App() {
  const isLoadingComplete = true;
  const isUserAuthenticated = true;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation isUserAuthenticated={isUserAuthenticated}  />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// wrap App component using theme provider to gain access to styled component themes
export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)