import '@/global.css'
import { Stack } from 'expo-router'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="sign-in" />
      </Stack>
    </GluestackUIProvider>
  )
}
