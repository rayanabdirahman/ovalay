import { AntDesign, Feather } from '@expo/vector-icons'
import * as Font from 'expo-font'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter'
import * as React from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  // load custom google font: Inter
  useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black,
  })

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...AntDesign.font,
          ...Feather.font
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
