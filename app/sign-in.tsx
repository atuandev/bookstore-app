import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'

import KeyboardProvider from '@/components/common/KeyboardProvider'
import FormInput from '@/components/common/FormInput'
import { CustomIcon, IconType } from '@/components/common/CustomIcon'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

const SignInScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Please fill in all fields',
      })
    }

    console.log(formData)

    // router.push('/(tabs)')
  }

  return (
    <Box className="bg-white px-4 flex-1 pt-10">
      <KeyboardProvider iosHeight={-150}>
        <Box className="w-full min-h-[85vh]">
          <Box className="mt-10">
            <Text className="font-extrabold text-3xl text-primary">Hey,</Text>
            <Text className="font-extrabold text-3xl text-primary">
              Welcome back
            </Text>
          </Box>

          <Box className="mt-8">
            <Text className="text-xl text-neutral-700 font-semibold mb-4">
              Login to your account
            </Text>
            <FormInput
              title="Username"
              placeholder="Enter your username"
              value={formData.username}
              handleChangeText={e => setFormData({ ...formData, username: e })}
              options={{
                autoCapitalize: 'none',
                disableFullscreenUI: isLoading,
              }}
              icon={
                <CustomIcon
                  icon={{ name: 'user', type: IconType.AntDesign }}
                  size={20}
                  color="#6b7280"
                  className="mr-2"
                />
              }
              formStyle="mt-4"
            />
            <FormInput
              title="Password"
              placeholder="Enter your password"
              value={formData.password}
              handleChangeText={e => setFormData({ ...formData, password: e })}
              options={{
                disableFullscreenUI: isLoading,
              }}
              icon={
                <CustomIcon
                  icon={{ name: 'lock', type: IconType.AntDesign }}
                  size={20}
                  color="#6b7280"
                  className="mr-2"
                />
              }
              type="password"
              formStyle="mt-4"
            />
            <Text className="mt-4 text-right text-sm text-gray-500 font-medium">
              Forgot password?
            </Text>

            <Button size="xl" disabled={isLoading} className="mt-16 shadow-sm" onPress={handleSubmit}>
              <ButtonText>Log in</ButtonText>
            </Button>

            <Box className="flex-row gap-1.5 mt-6 justify-center">
              <Text className="text-neutral-700 text-lg">
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('/sign-up')}>
                <Text className="text-primary text-lg font-semibold">
                  Sign up
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </KeyboardProvider>
      <StatusBar style="auto" />
    </Box>
  )
}

export default SignInScreen
