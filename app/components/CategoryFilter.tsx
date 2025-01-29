'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { ProductCategory } from '../lib/products'

interface CategoryFilterProps {
  categories: ProductCategory[]
  selectedCategory?: string
  onCategoryChange: (category: string) => void
}

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('')}
          className={`block w-full text-left px-3 py-2 rounded ${
            !selectedCategory ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
          }`}
        >
          All Categories
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
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
  )
}

export default CategoryFilter 