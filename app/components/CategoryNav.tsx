'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ProductCategory } from '../lib/products'
import { 
  PaintBrushIcon, 
  ComputerDesktopIcon,
  Cube3dIcon,
  SparklesIcon,
  HomeIcon,
  CubeIcon,
  CameraIcon,
  SwatchIcon,
  TableCellsIcon,
  BeakerIcon,
  ScissorsIcon
} from '@heroicons/react/24/outline'

const categories: { name: ProductCategory; icon: React.ElementType }[] = [
  { name: 'Paintings', icon: PaintBrushIcon },
  { name: 'Digital Art', icon: ComputerDesktopIcon },
  { name: '3D Models', icon: Cube3dIcon },
  { name: 'Jewelry', icon: SparklesIcon },
  { name: 'Interior Design', icon: HomeIcon },
  { name: 'Sculptures', icon: CubeIcon },
  { name: 'Photography', icon: CameraIcon },
  { name: 'Mixed Media', icon: SwatchIcon },
  { name: 'Furniture', icon: TableCellsIcon },
  { name: 'Ceramics', icon: BeakerIcon },
  { name: 'Textiles', icon: ScissorsIcon },
]

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null)

  return (
    <nav className="border-b sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 gap-8 no-scrollbar">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href={`/shop?category=${name.toLowerCase()}`}
              className={`flex flex-col items-center min-w-fit gap-2 group ${
                activeCategory === name ? 'text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveCategory(name)}
            >
              <div className={`p-3 rounded-lg group-hover:bg-gray-100 ${
                activeCategory === name ? 'bg-blue-100' : ''
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm whitespace-nowrap">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default CategoryNav 