import ProductForm from '@/entities/product/ui/ProductForm'
import { useUpdateProductMutation } from '@/entities/product/api/productApi'

export function ProductEditForm({ product, onSuccess }) {
  const [updateProduct] = useUpdateProductMutation()
  const handleSubmit = async ({ id, name, price, image }) => {
    await updateProduct({ id, data: { name, price, image } })
    if (onSuccess) onSuccess()
  }
  return <ProductForm product={product} onSubmit={handleSubmit} />
}
