import { Tabs } from 'expo-router'
import { CustomIcon, IconType } from '@/components/common/CustomIcon'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f43f5e',
      }}>
      <Tabs.Screen
        name="books"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>
            <CustomIcon icon={{ name: 'home', type: IconType.FontAwesomeIcon }} size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) =>
            <CustomIcon icon={{ name: 'shopping-cart', type: IconType.FontAwesomeIcon }} size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) =>
            <CustomIcon icon={{ name: 'user', type: IconType.FontAwesomeIcon }} size={24} color={color} />,

        }}
      />
    </Tabs>
  )
}