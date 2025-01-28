'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Metadata } from 'next'
import { getProducts } from '../lib/products'
import ProductCard from '../components/ProductCard'
import CategoryNav from '../components/CategoryNav'
import TrendingProducts from '../components/TrendingProducts'
import ShopFilters from '../components/ShopFilters'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Pagination from '../components/Pagination'
import QuickView from '../components/QuickView'

export const metadata: Metadata = {
  title: 'Shop | Art Gallery',
  description: 'Browse and purchase unique artworks from our curated collection',
}

const ITEMS_PER_PAGE = 9

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const products = await getProducts()

  const filteredProducts = products.filter(product => 
    !category || product.category.toLowerCase() === category.toLowerCase()
  )

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Art Gallery Shop</h1>
            <p className="text-gray-600 mb-8">
              Discover unique artworks from talented artists worldwide. From paintings to sculptures, 
              find the perfect piece for your space.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <CategoryNav />

      {/* Trending Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Trending Now</h2>
          <TrendingProducts products={products.slice(0, 4)} />
        </div>
      </section>

      {/* Main Shop Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ShopFilters />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-xl font-semibold">All Products</h2>
              <div className="flex items-center gap-4">
                <select className="border rounded-md px-3 py-2">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <div key={product.id} className="relative group">
                  <ProductCard {...product} />
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    Quick View
                  </button>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      <QuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </main>
  )
} 