import { ProductsContext } from '@/context/ProductsContext'

const products = [
  {
    id: '1',
    title: 'Apple iPhone 14 Pro',
    description: 'Смартфон з дисплеєм Super Retina XDR та чипом A16 Bionic',
    price: 47999,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Електроніка',
    amount: 2,
  },
  {
    id: '2',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Флагманський Android з камерою на 200 МП і S-Pen',
    price: 43999,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Електроніка',
    amount: 2,
  },
  {
    id: '3',
    title: 'Sony WH-1000XM5',
    description:
      'Безпровідні навушники з шумозаглушенням та 30 годинами автономності',
    price: 12999,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Аудіо',
    amount: 2,
  },
  {
    id: '4',
    title: 'Kindle Paperwhite 2023',
    description: 'Електронна книга з 6.8” дисплеєм, підсвіткою та водозахистом',
    price: 6299,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Книги',
    amount: 2,
  },
  {
    id: '5',
    title: 'Logitech MX Master 3S',
    description:
      'Програмована бездротова мишка з комфортним ергономічним дизайном',
    price: 3999,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Аксесуари',
    amount: 2,
  },
  {
    id: '6',
    title: 'The Pragmatic Programmer',
    description:
      'Класична книжка з програмування, яка впливає на мислення розробника',
    price: 1199,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Книги',
    amount: 2,
  },
  {
    id: '7',
    title: 'Nike Air Max 270',
    description: 'Комфортні кросівки з амортизацією для щоденного використання',
    price: 3699,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Одяг',
    amount: 2,
  },
  {
    id: '8',
    title: 'JBL Flip 6',
    description: 'Портативна колонка з потужним звуком і водостійким корпусом',
    price: 2899,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Аудіо',
    amount: 2,
  },
  {
    id: '9',
    title: 'GoPro HERO11 Black',
    description: 'Екшн-камера для зйомки в екстремальних умовах з відео 5.3K',
    price: 13499,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Електроніка',
    amount: 2,
  },
  {
    id: '10',
    title: 'Apple Watch Series 9',
    description:
      'Смарт-годинник з моніторингом здоров’я та інтеграцією з iPhone',
    price: 14999,
    imgSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/ua/2501/gallery/ua-galaxy-s25ultra-ps938-ef-ps938cbegww-thumb-544496268?$UX_EXT1_PNG$',
    category: 'Електроніка',
    amount: 2,
  },
]

function ProductProvider({ children }) {
  return <ProductsContext value={products}>{children}</ProductsContext>
}

export default ProductProvider
