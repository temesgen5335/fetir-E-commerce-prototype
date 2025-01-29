import { Product } from '../lib/products'
import ProductCard from './ProductCard'

interface TrendingProductsProps {
  products: Product[]
}

const TrendingProducts = ({ products }: TrendingProductsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="relative">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Trending
            </span>
          </div>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  )
}

export default TrendingProducts 