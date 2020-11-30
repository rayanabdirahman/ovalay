import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { theme } from './components/Theme'
import { State, store } from './store'
import { NavigationState } from './store/types'
import { authoriseUser } from './store/actions/authentication'

function App() {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()
  const { isUserSignedIn } = useSelector<State, NavigationState>(state => state.navigation)

  React.useEffect(() => {
    // dispatch action to check if user is authorised
    dispatch(authoriseUser())
  }, [])

  return (
    <SafeAreaProvider>
      <Navigation isUserSignedIn={isUserSignedIn} colorScheme={colorScheme} />
      <StatusBar style="dark"/>
    </SafeAreaProvider>
  )
}

export default function () {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    )
  }
}
