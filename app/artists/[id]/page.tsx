import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getArtist, getProducts } from '@/app/lib/products'
import { notFound } from 'next/navigation'
import ProductCard from '@/app/components/ProductCard'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { InstagramIcon } from 'lucide-react'
import { TwitterIcon } from 'lucide-react' 
import { getArtists } from '../../lib/artists'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artist = await getArtist(params.id)
  if (!artist) return { title: 'Artist Not Found' }

  return {
    title: `${artist.name} | Art Gallery`,
    description: artist.bio,
  }
}

export default async function ArtistPage({ params }: Props) {
  const artist = await getArtist(params.id)
  const products = await getProducts()
  
  if (!artist) {
    notFound()
  }

  const artistProducts = products.filter(product => product.artist === artist.name)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={artist.imageUrl}
              alt={artist.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
          <p className="text-gray-600 mb-4">{artist.location}</p>
          
          <div className="flex gap-2 mb-6">
            {artist.specialties.map(specialty => (
              <span
                key={specialty}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>

          <p className="text-gray-700 mb-6">{artist.bio}</p>

          {artist.socialLinks && (
            <div className="flex gap-4 mb-6">
              {artist.socialLinks.instagram && (
                <a
                  href={`https://instagram.com/${artist.socialLinks.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
              )}
              {artist.socialLinks.twitter && (
                <a
                  href={`https://twitter.com/${artist.socialLinks.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <TwitterIcon className="h-6 w-6" />
                </a>
              )}
              {artist.socialLinks.website && (
                <a
                  href={artist.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <GlobeIcon className="h-6 w-6" />
                </a>
              )}
            </div>
          )}

          {artist.awards && artist.awards.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Awards</h2>
              <ul className="list-disc list-inside text-gray-700">
                {artist.awards.map(award => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>
          )}

          {artist.exhibitions && artist.exhibitions.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Exhibitions</h2>
              <ul className="list-disc list-inside text-gray-700">
                {artist.exhibitions.map(exhibition => (
                  <li key={exhibition}>{exhibition}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Artworks by {artist.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artistProducts.map(product => (
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
    </main>
  )
}

export async function ArtistsPage() {
  const artists = await getArtists()

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Artists</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <Link 
            key={artist.id} 
            href={`/artists/${artist.id}`}
            className="group block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-64 w-full">
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {artist.name}
                </h2>
                <p className="text-gray-600 mb-3">{artist.location}</p>
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.slice(0, 3).map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
} 