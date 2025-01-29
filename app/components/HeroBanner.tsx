import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] w-full mb-12">
      <Image
        src="/images/hero-banner.jpg"
        alt="Art Gallery Hero"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Discover Unique Artworks
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Explore our curated collection of original artworks from talented artists worldwide
        </p>
        <Link
          href="/categories"
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner 