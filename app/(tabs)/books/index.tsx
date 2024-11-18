import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { FlatList } from 'react-native'
import { books } from '@/mockData/books'
import BookListItem from '@/components/tabs/BookListItem'

export default function HomeScreen() {
  return (
    <FlatList
      data={books}
      numColumns={2}
      renderItem={({ item }) => (
        <BookListItem book={item} />
      )}
    />
  )
}