import { Metadata } from 'next'
import HeroBanner from './components/HeroBanner'
import ProductCard from './components/ProductCard'
import { getProducts } from './lib/products'
import FeaturedArtists from './components/FeaturedArtists'

export const metadata: Metadata = {
  title: 'Art Gallery',
  description: 'Discover unique artworks from talented artists worldwide',
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      <HeroBanner />
      
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map(product => (
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

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Artists</h2>
          <FeaturedArtists />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Art Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about new artworks,
            featured artists, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
