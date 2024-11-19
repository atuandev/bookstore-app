import { FlatList } from 'react-native'

import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { AddIcon, CheckIcon, RemoveIcon, TrashIcon } from '@/components/ui/icon'
import { Image } from '@/components/ui/image'
import { formatVND } from '@/utils/format'
import { useCartStore } from '@/stores/cart-store'
import { useState } from 'react'
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator } from '@/components/ui/checkbox'

export default function CartScreen() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const { carts, increaseQuantity, decreaseQuantity, removeCart } = useCartStore()

  const totalPrice = carts
    .filter(item => selectedItems.includes(item.book.id))
    .reduce((acc, item) => acc + item.book.price * item.quantity, 0)

  return (
    <>
      <CheckboxGroup
        value={selectedItems}
        onChange={setSelectedItems}
      >
        <FlatList
          contentContainerClassName="p-2 gap-1"
          data={carts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Box className="p-4 rounded-lg w-full bg-white flex-1 flex-row">
              <Checkbox
                size="md"
                value={item.book.id}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
              </Checkbox>
              <Image
                source={{ uri: item.book.bookImages[0].url }}
                alt={item.book.title}
                resizeMode="contain"
                size="xl"
              />
              <Box className="flex-1">
                <Text className="font-semibold mb-2 text-typography-700 truncate">
                  {item.book.title}
                </Text>
                <Box className="mt-auto mb-2">
                  <Text className="text-xl font-bold text-primary-500">
                    {formatVND(item.book.price)}
                  </Text>
                </Box>
                <Box className="flex-row justify-between">
                  <Box className="items-center flex-row gap-2">
                    <Button size="xs" action="secondary" variant="outline"
                            onPress={() => decreaseQuantity(item.book.id)}>
                      <ButtonIcon as={RemoveIcon} />
                    </Button>
                    <Text className="text-lg font-bold">{item.quantity}</Text>
                    <Button size="xs" action="secondary" variant="outline"
                            onPress={() => increaseQuantity(item.book.id)}>
                      <ButtonIcon as={AddIcon} />
                    </Button>
                  </Box>
                  <Button size="xs" action="negative" variant="outline" onPress={() => removeCart(item.book.id)}>
                    <ButtonIcon as={TrashIcon} />
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        />
      </CheckboxGroup>
      <Box className="flex-row p-4 rounded-lg w-full bg-white mt-auto">
        <Box className="flex-1">
          <Text className="font-semibold text-typography-700 truncate">
            Tổng cộng
          </Text>
          <Text className="text-xl font-bold text-primary-500">
            {formatVND(totalPrice)}
          </Text>
        </Box>
        <Button size="lg">
          <ButtonText>Thanh toán</ButtonText>
        </Button>
      </Box>
    </>
  )
}