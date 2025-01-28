'use client'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../lib/products'

const categories = [
  'Paintings',
  'Sculptures',
  'Digital Art',
  'Photography',
  'Mixed Media',
]

const priceRanges = [
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $500', min: 100, max: 500 },
  { label: '$500 - $1000', min: 500, max: 1000 },
  { label: 'Over $1000', min: 1000, max: Infinity },
]

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    router.push(`/categories?category=${category}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    selectedCategory === category
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map(range => (
                <button
                  key={range.label}
                  onClick={() => setSelectedPriceRange(range.label)}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    selectedPriceRange === range.label
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </aside>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Products grid will go here */}
          </div>
        </div>
      </div>
    </main>
  )
} 