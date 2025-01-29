'use client'
import { useState } from 'react'
import { ProductCategory } from '../lib/products'

const priceRanges = [
  { id: '0-100', label: 'Under $100' },
  { id: '100-500', label: '$100 - $500' },
  { id: '500-1000', label: '$500 - $1000' },
  { id: '1000+', label: 'Over $1000' },
]

const materialOptions = [
  'Acrylic', 'Oil', 'Canvas', 'Wood', 'Metal', 
  'Glass', 'Ceramic', 'Textile', 'Digital', 'Mixed Media'
]

const styleOptions = [
  'Modern', 'Contemporary', 'Abstract', 'Minimalist',
  'Traditional', 'Impressionist', 'Surrealist', 'Pop Art'
]

const ShopFilters = () => {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])

  const handlePriceRangeChange = (rangeId: string) => {
    setSelectedPriceRanges(prev => {
      if (prev.includes(rangeId)) {
        return prev.filter(id => id !== rangeId)
      }
      return [...prev, rangeId]
    })
  }

  return (
    <div className="space-y-8">
      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.id)}
                onChange={() => handlePriceRangeChange(range.id)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Availability</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">In Stock</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Pre-order</span>
          </label>
        </div>
      </div>

      {/* Artist Location Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Artist Location</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">North America</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Europe</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Asia</span>
          </label>
        </div>
      </div>

      {/* Materials Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Materials</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {materialOptions.map(material => (
            <label key={material} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material)}
                onChange={() => {
                  setSelectedMaterials(prev =>
                    prev.includes(material)
                      ? prev.filter(m => m !== material)
                      : [...prev, material]
                  )
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Style Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Style</h3>
        <div className="space-y-2">
          {styleOptions.map(style => (
            <label key={style} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedStyles.includes(style)}
                onChange={() => {
                  setSelectedStyles(prev =>
                    prev.includes(style)
                      ? prev.filter(s => s !== style)
                      : [...prev, style]
                  )
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="px-2">
          <input
            type="range"
            min={0}
            max={5000}
            step={100}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedMaterials.length > 0 || selectedStyles.length > 0) && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Active Filters</h3>
          <div className="flex flex-wrap gap-2">
            {[...selectedMaterials, ...selectedStyles].map(filter => (
              <span
                key={filter}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {filter}
                <button
                  onClick={() => {
                    if (selectedMaterials.includes(filter)) {
                      setSelectedMaterials(prev => prev.filter(m => m !== filter))
                    } else {
                      setSelectedStyles(prev => prev.filter(s => s !== filter))
                    }
                  }}
                  className="ml-2"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          setSelectedMaterials([])
          setSelectedStyles([])
          setPriceRange([0, 5000])
          setSelectedPriceRanges([])
        }}
        className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  )
}

export default ShopFilters 