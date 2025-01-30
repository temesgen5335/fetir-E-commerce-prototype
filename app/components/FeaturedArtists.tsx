import Image from 'next/image'
import Link from 'next/link'

interface Artist {
  id: string
  name: string
  imageUrl: string
  bio: string
  specialty: string
  productCount: number
}

const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    imageUrl: '/artists/sarah-chen.jpg', // You'll need to add these images to your public folder
    bio: 'Contemporary abstract artist specializing in vibrant acrylic paintings',
    specialty: 'Abstract Art',
    productCount: 24
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    imageUrl: '/artists/marcus-rivera.jpg',
    bio: 'Digital artist creating surreal landscapes and character designs',
    specialty: 'Digital Art',
    productCount: 18
  },
  {
    id: '3',
    name: 'Emma Thompson',
    imageUrl: '/artists/emma-thompson.jpg',
    bio: 'Traditional oil painter focusing on realistic portraits and still life',
    specialty: 'Oil Painting',
    productCount: 15
  }
]

export default function FeaturedArtists() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Artists
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockArtists.map((artist) => (
          <Link 
            href={`/artists/${artist.id}`} 
            key={artist.id}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-64 w-full">
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {artist.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {artist.specialty}
                </p>
                
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {artist.bio}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {artist.productCount} Products
                  </span>
                  
                  <span className="text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                    View Profile →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 