// This is a mock service - replace with your actual API calls
export type ProductCategory = 
  | 'Paintings'
  | 'Digital Art'
  | '3D Models'
  | 'Jewelry'
  | 'Interior Design'
  | 'Sculptures'
  | 'Photography'
  | 'Mixed Media'
  | 'Furniture'
  | 'Ceramics'
  | 'Textiles'

export interface Product {
  id: string
  title: string
  artist: string
  price: number
  imageUrl: string
  description: string
  category: ProductCategory
  tags: string[]
  dimensions?: string
  materials?: string[]
  createdAt: string
}

const products: Product[] = [
  {
    id: '1',
    title: 'Abstract Harmony',
    artist: 'Jane Doe',
    price: 599,
    imageUrl: '/images/abstract-harmony.jpg',
    description: 'A vibrant abstract piece exploring color and movement.',
    category: 'Paintings',
    tags: ['abstract', 'colorful', 'modern'],
    dimensions: '36" x 48"',
    materials: ['acrylic', 'canvas'],
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Digital Dreams',
    artist: 'John Smith',
    price: 299,
    imageUrl: '/images/digital-dreams.jpg',
    description: 'A digital artwork exploring futuristic themes.',
    category: 'Digital Art',
    tags: ['digital', 'futuristic', 'sci-fi'],
    createdAt: '2024-02-01',
  },
  {
    id: '3',
    title: 'Modern Living Room Set',
    artist: 'Emma Wilson',
    price: 2499,
    imageUrl: '/images/modern-living.jpg',
    description: 'Contemporary furniture design for modern living spaces.',
    category: 'Furniture',
    tags: ['modern', 'furniture', 'interior'],
    dimensions: 'Varies by piece',
    materials: ['wood', 'metal', 'fabric'],
    createdAt: '2024-01-20',
  },
  {
    id: '4',
    title: 'Crystal Garden Necklace',
    artist: 'Maria Cruz',
    price: 349,
    imageUrl: '/images/crystal-necklace.jpg',
    description: 'Handcrafted silver necklace with natural crystals.',
    category: 'Jewelry',
    tags: ['handmade', 'silver', 'crystals'],
    materials: ['silver', 'crystals', 'precious stones'],
    createdAt: '2024-02-10',
  },
  // Add more products as needed
]

export async function getProducts(): Promise<Product[]> {
  // Simulate API call
  return Promise.resolve(products)
}

export async function getProduct(id: string): Promise<Product | null> {
  const product = products.find(p => p.id === id)
  return Promise.resolve(product || null)
} 