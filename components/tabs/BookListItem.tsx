import { Book } from '@/mockData/books'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'
import { AddIcon, FavouriteIcon } from '@/components/ui/icon'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { formatVND } from '@/utils/format'

type BookListItemProps = {
  book: Book
}

export default function BookListItem({ book }: BookListItemProps) {
  return <>
    <Box className="p-4 rounded-lg max-w-[360px] bg-white flex-1 m-1">
      <Image
        source={{ uri: book.bookImages[0].url }}
        alt={book.title}
        resizeMode="contain"
        className="mb-6 h-[200px] w-full rounded-md"
      />
      <Text className="font-semibold mb-2 text-typography-700 truncate">
        {book.title}
      </Text>
      <Text className="mb-4 text-2xl font-bold text-primary-500 mt-auto">
        {formatVND(book.price)}
      </Text>
      <Box className="flex-col gap-2">
        <Button className="px-4 py-2">
          <ButtonIcon as={AddIcon} />
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonIcon as={FavouriteIcon} />
          <ButtonText size="sm">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Box>
  </>
}