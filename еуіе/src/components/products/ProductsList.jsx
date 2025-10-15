import ProductItem from './ProductItem'

function ProductsList({ productsList }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 border-b pb-2">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsList.length ? (
          productsList.map((prod) => <ProductItem key={prod.id} prod={prod} />)
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            List is empty
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsList
