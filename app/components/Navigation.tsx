'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../hooks/useCart'
import Search from './Search'

const Navigation = () => {
  const pathname = usePathname()
  const { items } = useCart()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Art Gallery
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <Search />
          </div>

          <div className="flex space-x-6 items-center">
            <Link
              href="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={`${
                isActive('/categories') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition-colors`}
            >
              Shop
            </Link>
            <Link
              href="/artists"
              className={`${
                isActive('/artists') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition-colors`}
            >
              Artists
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition-colors`}
            >
              Contact
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 