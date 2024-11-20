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
import { useUserStore } from '@/stores/user'
import { usersData } from '@/mockData/user'

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useUserStore()

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Please fill in all fields',
      })
    }

    const user = {
      id: Math.random(),
      ...formData,
    }
    usersData.push(user)
    setUser(user)

    router.replace('/(tabs)/books')
  }

  return (
    <Box className="bg-white px-4 flex-1 pt-10">
      <KeyboardProvider iosHeight={-150}>
        <Box className="w-full min-h-[85vh]">
          <Box className="mt-10">
            <Text className="font-extrabold text-3xl text-primary-500">Let's</Text>
            <Text className="font-extrabold text-3xl text-primary-500">
              Get started
            </Text>
          </Box>

          <Box className="mt-8">
            <Text className="text-xl text-neutral-700 font-semibold mb-4">
              Create an account
            </Text>
            <FormInput
              title="Name"
              placeholder="Enter your name"
              value={formData.name}
              handleChangeText={e => setFormData({ ...formData, name: e })}
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
            />
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
              title="Email"
              placeholder="Enter your email"
              value={formData.email}
              handleChangeText={e => setFormData({ ...formData, email: e })}
              options={{
                autoCapitalize: 'none',
                disableFullscreenUI: isLoading,
              }}
              icon={
                <CustomIcon
                  icon={{ name: 'mail', type: IconType.AntDesign }}
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
              <ButtonText>Sign up</ButtonText>
            </Button>

            <Box className="flex-row gap-1.5 mt-6 justify-center">
              <Text className="text-neutral-700 text-lg">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('/sign-in')}>
                <Text className="text-primary-500 text-lg font-semibold">
                  Log in
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

export default SignUpScreen
