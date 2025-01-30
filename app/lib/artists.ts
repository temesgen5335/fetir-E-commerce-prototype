export type ArtistSpecialty =
  | 'Painter'
  | 'Digital Artist'
  | '3D Modeler'
  | 'Jewelry Designer'
  | 'Interior Designer'
  | 'Sculptor'
  | 'Photographer'
  | 'Mixed Media Artist'
  | 'Furniture Designer'
  | 'Ceramic Artist'
  | 'Textile Artist'

export interface Artist {
  id: string
  name: string
  specialties: ArtistSpecialty[]
  imageUrl: string
  bio: string
  artworksCount: number
  featured: boolean
  location: string
  socialLinks?: {
    website?: string
    instagram?: string
    twitter?: string
  }
  awards?: string[]
  exhibitions?: string[]
}

const artists: Artist[] = [
  {
    id: '1',
    name: 'Jane Doe',
    specialties: ['Painter', 'Mixed Media Artist'],
    imageUrl: '/images/artists/jane-doe.jpg',
    bio: 'Contemporary artist known for vibrant abstract paintings and mixed media works.',
    artworksCount: 24,
    featured: true,
    location: 'New York, USA',
    socialLinks: {
      instagram: '@janedoeart',
      website: 'www.janedoeart.com',
    },
    exhibitions: [
      'Modern Art Gallery, NYC 2023',
      'International Art Fair 2022',
    ],
  },
  {
    id: '2',
    name: 'John Smith',
    specialties: ['Digital Artist', '3D Modeler'],
    imageUrl: '/images/artists/john-smith.jpg',
    bio: 'Digital artist pushing the boundaries of technology and creativity.',
    artworksCount: 18,
    featured: true,
    location: 'San Francisco, USA',
    socialLinks: {
      instagram: '@johnsmithart',
      twitter: '@johnsmithart',
    },
  },
  {
    id: '3',
    name: 'Emma Wilson',
    specialties: ['Interior Designer', 'Furniture Designer'],
    imageUrl: '/images/artists/emma-wilson.jpg',
    bio: 'Award-winning interior designer creating functional and beautiful spaces.',
    artworksCount: 15,
    featured: true,
    location: 'London, UK',
    socialLinks: {
      website: 'www.emmawilsondesign.com',
      instagram: '@emmawilsondesign',
    },
    awards: [
      'Best Interior Designer 2023',
      'Innovation in Design Award 2022',
    ],
  },
  {
    id: '4',
    name: 'Maria Cruz',
    specialties: ['Jewelry Designer'],
    imageUrl: '/images/artists/maria-cruz.jpg',
    bio: 'Crafting unique jewelry pieces that blend traditional techniques with modern design.',
    artworksCount: 32,
    featured: true,
    location: 'Barcelona, Spain',
    socialLinks: {
      instagram: '@mariacruzjewelry',
    },
  },
  {
    id: '5',
    name: 'David Chen',
    specialties: ['Sculptor', 'Ceramic Artist'],
    imageUrl: '/images/artists/david-chen.jpg',
    bio: 'Contemporary sculptor working with various materials to create thought-provoking pieces.',
    artworksCount: 20,
    featured: true,
    location: 'Tokyo, Japan',
    exhibitions: [
      'Contemporary Sculpture Exhibition 2023',
      'Asian Art Biennale 2022',
    ],
  },
]

export async function getArtists(): Promise<Artist[]> {
  // Mock data - replace with actual API call or database query
  return [
    {
      id: '1',
      name: 'Sarah Johnson',
      imageUrl: '/images/artists/sarah-johnson.jpg',
      location: 'New York, USA',
      specialties: ['Oil Painting', 'Portrait', 'Landscape'],
      bio: 'Contemporary artist specializing in oil paintings',
    },
    {
      id: '2',
      name: 'David Chen',
      imageUrl: '/images/artists/david-chen.jpg',
      location: 'Vancouver, Canada',
      specialties: ['Sculpture', 'Installation', 'Mixed Media'],
      bio: 'Experimental sculptor working with sustainable materials',
    },
    // Add more artists as needed
  ]
}

export async function getFeaturedArtists(): Promise<Artist[]> {
  return Promise.resolve(artists.filter(artist => artist.featured))
}

export async function getArtist(id: string): Promise<Artist | null> {
  const artist = artists.find(a => a.id === id)
  return Promise.resolve(artist || null)
}

export async function getArtistsBySpecialty(specialty: ArtistSpecialty): Promise<Artist[]> {
  return Promise.resolve(artists.filter(artist => artist.specialties.includes(specialty)))
} 