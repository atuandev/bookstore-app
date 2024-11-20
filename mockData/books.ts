export type Book = {
  id: string
  title: string
  slug: string
  description: string
  author: string
  size: string
  pages: number
  weight: number
  publishYear: number
  importPrice: number
  price: number
  stock: number
  sold: number
  isNew: boolean
  isFeatured: boolean
  status: boolean
  categoryId: string
  publisherId: string
  bookImages: {
    url: string
  }[]
  rating: number
}

export const categories = [
  'Tiểu Thuyết',
  'Văn Học',
  'Kỹ Năng Sống',
  'Lịch Sử',
  'Truyện Ngắn',
  'Giáo Dục',
  'Phong Cách Sống',
]

export const books: Book[] = [
  {
    id: '1',
    title: 'Hai Số Phận - Bìa Cứng (Tái Bản 2023)',
    slug: 'hai-so-phan-bia-cung-tai-ban-2023',
    description: 'Jeffrey Archer là nhà văn người Anh và cũng là một chính trị gia. Ông từng là một thành viên của Quốc hội và Phó Chủ tịch Đảng Bảo thủ.',
    author: 'Jeffrey Archer',
    size: '20.5 x 13.5 x 3 cm',
    pages: 768,
    weight: 685,
    publishYear: 2023,
    importPrice: 150000,
    price: 175000,
    stock: 10,
    sold: 18,
    isNew: true,
    isFeatured: true,
    status: true,
    categoryId: 'Tiểu Thuyết',
    publisherId: 'Nhà Xuất Bản Trẻ',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/h/s/hsp-bia-cung---xuat-in-goc-b1.jpg',
      },
    ],
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Nhà Giả Kim',
    slug: 'nha-gia-kim',
    description: 'Tác phẩm nổi tiếng của Paulo Coelho về hành trình tìm kiếm ước mơ và ý nghĩa cuộc sống.',
    author: 'Paulo Coelho',
    size: '20 x 13.5 x 2 cm',
    pages: 228,
    weight: 300,
    publishYear: 2021,
    importPrice: 95000,
    price: 120000,
    stock: 20,
    sold: 5,
    isNew: true,
    isFeatured: false,
    status: true,
    categoryId: 'Văn Học',
    publisherId: 'Nhà Xuất Bản Văn Học',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/n/h/nha-gia-kim-b.jpg',
      },
    ],
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Đắc Nhân Tâm',
    slug: 'dac-nhan-tam',
    description: 'Cuốn sách kỹ năng sống kinh điển giúp bạn thành công trong giao tiếp và quản lý mối quan hệ.',
    author: 'Dale Carnegie',
    size: '20.5 x 14 x 2.5 cm',
    pages: 320,
    weight: 400,
    publishYear: 2022,
    importPrice: 105000,
    price: 135000,
    stock: 15,
    sold: 7,
    isNew: true,
    isFeatured: true,
    status: true,
    categoryId: 'Kỹ Năng Sống',
    publisherId: 'Nhà Xuất Bản Tổng Hợp',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/dac_nhan_tam/2024_07_15_15_41_30_1-390x510.jpg',
      },
    ],
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Sapiens: Lược Sử Loài Người',
    slug: 'sapiens-luoc-su-loai-nguoi',
    description: 'Yuval Noah Harari kể lại lịch sử nhân loại một cách sáng tạo và cuốn hút.',
    author: 'Yuval Noah Harari',
    size: '23 x 15 x 3 cm',
    pages: 512,
    weight: 600,
    publishYear: 2020,
    importPrice: 200000,
    price: 250000,
    stock: 12,
    sold: 2,
    isNew: false,
    isFeatured: true,
    status: true,
    categoryId: 'Lịch Sử',
    publisherId: 'Nhà Xuất Bản Thế Giới',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/sapiens_luoc_su_loai_nguoi/2023_03_21_16_35_44_1-390x510.jpg',
      },
    ],
    rating: 4.9,
  },
  {
    id: '5',
    title: 'Cà Phê Cùng Tony',
    slug: 'ca-phe-cung-tony',
    description: 'Tập hợp những câu chuyện đời thường hài hước và bài học cuộc sống từ Tony Buổi Sáng.',
    author: 'Tony Buổi Sáng',
    size: '20 x 14 x 1.5 cm',
    pages: 280,
    weight: 350,
    publishYear: 2019,
    importPrice: 85000,
    price: 110000,
    stock: 25,
    sold: 10,
    isNew: false,
    isFeatured: false,
    status: true,
    categoryId: 'Truyện Ngắn',
    publisherId: 'Nhà Xuất Bản Trẻ',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974180548.jpg',
      },
    ],
    rating: 4.6,
  },
  {
    id: '6',
    title: '7 Thói Quen Hiệu Quả',
    slug: '7-thoi-quen-hieu-qua',
    description: 'Stephen R. Covey hướng dẫn bạn cách phát triển bản thân và đạt thành công bền vững.',
    author: 'Stephen R. Covey',
    size: '22 x 15 x 2 cm',
    pages: 420,
    weight: 500,
    publishYear: 2021,
    importPrice: 190000,
    price: 230000,
    stock: 8,
    sold: 3,
    isNew: true,
    isFeatured: true,
    status: true,
    categoryId: 'Kỹ Năng Sống',
    publisherId: 'Nhà Xuất Bản Lao Động',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935280400733.jpg',
      },
    ],
    rating: 4.8,
  },
  {
    id: '7',
    title: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',
    slug: 'toi-thay-hoa-vang-tren-co-xanh',
    description: 'Nguyễn Nhật Ánh kể câu chuyện tuổi thơ trong sáng, bình yên và đậm chất quê hương.',
    author: 'Nguyễn Nhật Ánh',
    size: '18.5 x 12.5 x 1.8 cm',
    pages: 378,
    weight: 300,
    publishYear: 2018,
    importPrice: 65000,
    price: 80000,
    stock: 30,
    sold: 20,
    isNew: false,
    isFeatured: false,
    status: true,
    categoryId: 'Tiểu Thuyết',
    publisherId: 'Nhà Xuất Bản Trẻ',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/n/n/nna-hvtcx.jpg',
      },
    ],
    rating: 4.7,
  },
  {
    id: '8',
    title: 'Khuyến Học',
    slug: 'khuyen-hoc',
    description: 'Fukuzawa Yukichi khuyến khích tư duy độc lập và học hỏi không ngừng.',
    author: 'Fukuzawa Yukichi',
    size: '19 x 13 x 2 cm',
    pages: 248,
    weight: 400,
    publishYear: 2019,
    importPrice: 105000,
    price: 130000,
    stock: 18,
    sold: 6,
    isNew: false,
    isFeatured: true,
    status: true,
    categoryId: 'Giáo Dục',
    publisherId: 'Nhà Xuất Bản Văn Hóa',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_214482_1.jpg',
      },
    ],
    rating: 4.6,
  },
  {
    id: '9',
    title: 'Lối Sống Tối Giản Của Người Nhật',
    slug: 'loi-song-toi-gian-cua-nguoi-nhat',
    description: 'Fumio Sasaki giới thiệu cách tối giản cuộc sống để hạnh phúc hơn.',
    author: 'Fumio Sasaki',
    size: '21 x 14.5 x 2 cm',
    pages: 300,
    weight: 420,
    publishYear: 2021,
    importPrice: 95000,
    price: 115000,
    stock: 10,
    sold: 4,
    isNew: true,
    isFeatured: false,
    status: true,
    categoryId: 'Phong Cách Sống',
    publisherId: 'Nhà Xuất Bản Hội Nhà Văn',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_240804_1.jpg',
      },
    ],
    rating: 4.9,
  },
  {
    id: '10',
    title: 'Những Người Khốn Khổ',
    slug: 'nhung-nguoi-khon-kho',
    description: 'Victor Hugo kể câu chuyện cảm động về nhân đạo và công lý.',
    author: 'Victor Hugo',
    size: '24 x 16 x 4 cm',
    pages: 1200,
    weight: 1500,
    publishYear: 2020,
    importPrice: 300000,
    price: 350000,
    stock: 5,
    sold: 1,
    isNew: false,
    isFeatured: true,
    status: true,
    categoryId: 'Tiểu Thuyết',
    publisherId: 'Nhà Xuất Bản Văn Học',
    bookImages: [
      {
        url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935086840252.jpg',
      },
    ],
    rating: 4.7,
  },
]