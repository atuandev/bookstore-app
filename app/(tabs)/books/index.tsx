import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { FlatList, TouchableOpacity } from 'react-native'
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'

import { books } from '@/mockData/books'
import BookListItem from '@/components/tabs/BookListItem'
import FormInput from '@/components/common/FormInput'
import { CustomIcon, IconType } from '@/components/common/CustomIcon'
import KeyboardProvider from '@/components/common/KeyboardProvider'

const LIST_CATEGORY = [
  'Tất cả',
  'Tiểu Thuyết',
  'Văn Học',
  'Kỹ Năng Sống',
  'Lịch Sử',
  'Truyện Ngắn',
  'Giáo Dục',
  'Phong Cách Sống',
]

export default function HomeScreen() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')

  const debounceSearch = useCallback(
    debounce((value: string) => {
      setSearch(value)
    }, 300),
    [],
  )

  const filteredBooks = books.filter((book) => {
    if (selectedCategory === 'Tất cả') {
      return book.title.toLowerCase().includes(search.toLowerCase())
    }
    return book.categoryId === selectedCategory && book.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <KeyboardProvider iosHeight={-200}>
      <Box className="relative w-full">
        <Box className="absolute top-0 left-0 w-full z-10 bg-primary-500 px-4 pb-2 pt-6">
          <FormInput
            value={search}
            handleChangeText={(value) => debounceSearch(value)}
            placeholder="Tìm kiếm sách"
            icon={<CustomIcon icon={{ name: 'search', type: IconType.Ionicons }} size={20} color="gray" />}
          />
        </Box>
        <FlatList
          ListHeaderComponent={
            <FlatList
              data={LIST_CATEGORY}
              keyExtractor={item => item}
              contentContainerClassName="bg-white p-4"
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => setSelectedCategory(item)}
                  className={`px-4 py-2 mr-2 rounded-full bg-primary-50 ${selectedCategory === item ? 'bg-primary-500' : ''}`}
                >
                  <Text className={`text-sm ${selectedCategory === item ? 'text-white' : 'text-primary-500'}`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )} horizontal />
          }

          data={filteredBooks}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          contentContainerClassName="pt-[100px]"
          renderItem={({ item }) => (
            <BookListItem book={item} />
          )}
        />
      </Box>
    </KeyboardProvider>
  )
}