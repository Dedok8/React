import ProductForm from '@/entities/product/ui/ProductForm'
import { useAddProductMutation } from '@/entities/product/api/productApi'

export function ProductAddForm({ onSuccess }) {
  const [addProduct] = useAddProductMutation()
  const handleSubmit = async ({ name, price, image }) => {
    await addProduct({ name, price, image })
    if (onSuccess) onSuccess()
  }
  return <ProductForm onSubmit={handleSubmit} />
}
