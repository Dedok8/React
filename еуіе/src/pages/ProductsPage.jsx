import { useContext } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import ProductsList from '@/components/products/ProductsList'

function ProductsPage() {
  const productsList = useContext(ProductsContext)
  return (
    <div>
      <ProductsList productsList={productsList} />
    </div>
  )
}

export default ProductsPage
