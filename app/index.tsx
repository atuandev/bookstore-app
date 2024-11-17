import { Button, ButtonText } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'
import { images } from '@/constants'
import { router } from 'expo-router'

export default function WelcomeScreen() {
  return (
    <Box className="flex-1 bg-white px-4">
      <Box className="min-h-[90vh]">
        <Box className="items-center mt-20">
          <Image
            source={images.welcome}
            alt="Welcome"
            className="w-80 h-80"
            resizeMode="contain"
          />

          <Text className="font-extrabold text-primary text-4xl tracking-widest">
            Book E-Commerce
          </Text>
        </Box>

        <Box className="mt-auto gap-2">
          <Button size="xl" onPress={() => router.push('/sign-up')}>
            <ButtonText>Get Started!</ButtonText>
          </Button>
          <Button size="xl" variant="outline" onPress={() => router.push('/sign-in')}>
            <ButtonText>Sign In</ButtonText>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}