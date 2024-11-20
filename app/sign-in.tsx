import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'

import KeyboardProvider from '@/components/common/KeyboardProvider'
import { CustomIcon, IconType } from '@/components/common/CustomIcon'
import FormInput from '@/components/common/FormInput'
import { Button, ButtonText } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { router, useRouter } from 'expo-router'
import { usersData } from '@/mockData/user'
import { useUserStore } from '@/stores/user'

const SignInScreen = () => {
  const [formData, setFormData] = useState({
    username: 'admin',
    password: 'admin',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useUserStore()

  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Please fill in all fields',
      })
      return
    }

    usersData.forEach(user => {
      if (user.username === formData.username && user.password === formData.password) {
        setUser(user)
        router.replace('/(tabs)/books')
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: 'Invalid username or password',
        })
      }
    })
  }

  return (
    <Box className="bg-white px-4 flex-1 pt-10">
      <KeyboardProvider iosHeight={-150}>
        <Box className="w-full min-h-[85vh]">
          <Box className="mt-10">
            <Text className="font-extrabold text-3xl text-primary-500">Hey,</Text>
            <Text className="font-extrabold text-3xl text-primary-500">
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
                <Text className="text-primary-500 text-lg font-semibold">
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
