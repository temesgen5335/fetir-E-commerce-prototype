import Image from 'next/image'
import Link from 'next/link'
import ImageWithFallback from './ImageWithFallback'
import { getFeaturedArtists } from '../lib/artists'
import type { Artist } from '../lib/artists'

async function FeaturedArtists() {
  const artists = await getFeaturedArtists()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {artists.map((artist: Artist) => (
        <Link
          key={artist.id}
          href={`/artists/${artist.id}`}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <ImageWithFallback
                src={artist.imageUrl}
                alt={artist.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
              <p className="text-gray-600 mb-2">{artist.specialties.join(', ')}</p>
              <p className="text-sm text-gray-500 mb-2">{artist.location}</p>
              <p className="text-sm text-gray-500">{artist.artworksCount} artworks</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FeaturedArtists 