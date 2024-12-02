import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'

import axiosClient from '@/lib/axiosClient'
import { useListBooksStore } from '@/stores/listBooksStore'
import { BookListResponse } from '@/types/book'
import { Box } from '@/components/ui/box'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { ListBooksCategory } from '@/components/books/list-books-category'
import { ListBooksHeader } from '@/components/books/list-books-header'
import BookListItem from '@/components/tabs/BookListItem'
import KeyboardProvider from '@/components/common/KeyboardProvider'

export default function HomeScreen() {
  const { pageNo, pageSize, categorySlug, sortBy, search, setPageSize } = useListBooksStore()
  const [listBooks, setListBooks] = useState<BookListResponse>()

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axiosClient.get<BookListResponse>(`/books/list?pageNo=${pageNo}&pageSize=${pageSize}&categorySlug=${categorySlug}&sortBy=${sortBy}&search=${search}`)
      setListBooks(data)
    }
    fetchBooks()
  }, [pageNo, pageSize, categorySlug, sortBy, search])

  const handleEndReached = () => {
    setPageSize(pageSize + 8)
  }

  if (!listBooks) return <LoadingSpinner />

  return (
    <KeyboardProvider iosHeight={-200}>
      <Box className="w-full">
        <ListBooksHeader />

        <FlatList
          ListHeaderComponent={
            <ListBooksCategory />
          }
          data={listBooks.data.items}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <BookListItem book={item} />
          )}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
        />
      </Box>
    </KeyboardProvider>
  )
}