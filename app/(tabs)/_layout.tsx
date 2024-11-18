import { Tabs } from 'expo-router'
import { CustomIcon, IconType } from '@/components/common/CustomIcon'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f43f5e',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>
            <CustomIcon icon={{ name: 'home', type: IconType.FontAwesomeIcon }} size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) =>
            <CustomIcon icon={{ name: 'user', type: IconType.FontAwesomeIcon }} size={28} color={color} />,

        }}
      />
    </Tabs>
  )
}