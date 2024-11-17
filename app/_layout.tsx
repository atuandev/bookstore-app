import '@/global.css'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
