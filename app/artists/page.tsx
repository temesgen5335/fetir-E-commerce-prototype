import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getArtists } from '../lib/artists'

export const metadata: Metadata = {
  title: 'Artists | Art Gallery',
  description: 'Discover talented artists and craftsmen from around the world',
}

export default async function ArtistsPage() {
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