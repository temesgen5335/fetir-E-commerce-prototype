import { Metadata } from 'next'
import { getProducts } from '../lib/products'
import { getArtists } from '../lib/artists'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  searchParams: { q: string }
}

export const metadata: Metadata = {
  title: 'Search Results | Art Gallery',
  description: 'Search results for artworks and artists',
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q?.toLowerCase() || ''
  const products = await getProducts()
  const artists = await getArtists()

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.tags.some(tag => tag.toLowerCase().includes(query))
  )

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(query) ||
    artist.bio.toLowerCase().includes(query) ||
    artist.specialties.some(specialty => specialty.toLowerCase().includes(query))
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Search Results for "{searchParams.q}"
      </h1>

      {filteredArtists.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArtists.map(artist => (
              <Link
                key={artist.id}
                href={`/artists/${artist.id}`}
                className="group block"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={artist.imageUrl}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{artist.name}</h3>
                    <p className="text-gray-600">
                      {artist.specialties.join(', ')}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {filteredProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                artist={product.artist}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </section>
      )}

      {filteredProducts.length === 0 && filteredArtists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No results found for "{searchParams.q}". Try different keywords.
          </p>
        </div>
      )}
    </main>
  )
} 