import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function WelcomeScreen() {
  return (
    <Box>
      <Text className='text-sky-500'>Welcome to Gluestack!</Text>
      <Text>Edit app/index.tsx to get started.</Text>
      <Button>
        <ButtonText>Get Started</ButtonText>
      </Button>
    </Box>
  )
}