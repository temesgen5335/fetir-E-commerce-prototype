'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AddToCart from './AddToCart'
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid, BookmarkIcon as BookmarkSolid } from '@heroicons/react/24/solid'
import ImageWithFallback from './ImageWithFallback'

interface ProductCardProps {
  id: string
  title: string
  artist: string
  price: number
  imageUrl: string
}

const ProductCard = ({ id, title, artist, price, imageUrl }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link href={`/products/${id}`}>
          <div className="relative h-64 w-full">
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            {isLiked ? (
              <HeartSolid className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            {isBookmarked ? (
              <BookmarkSolid className="w-5 h-5 text-blue-500" />
            ) : (
              <BookmarkIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      <Link href={`/products/${id}`}>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <Link 
            href={`/artists/${artist.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            by {artist}
          </Link>
          <p className="text-lg font-bold text-gray-900 mt-2">${price}</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <AddToCart productId={id} />
      </div>
    </div>
  )
}

export default ProductCard
