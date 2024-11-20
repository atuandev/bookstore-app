import '@/global.css'
import { Stack } from 'expo-router'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import Toast from 'react-native-toast-message'

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="sign-in" />
      </Stack>
      <Toast />
    </GluestackUIProvider>
  )
}
