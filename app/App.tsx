import React, { useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import Navigation from './navigation'
import { theme } from './components/Themed'
import { store, State } from './store'
import { authoriseUser } from './store/actions/authentication'

// ThemeProvider component provideds access to styled component theme
function App() {
  const { session } = useSelector<State, State>(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authoriseUser()) // dispatch action to authorise user
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation isUserAuthenticated={true}  />
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