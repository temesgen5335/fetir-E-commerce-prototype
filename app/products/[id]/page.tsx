import { Metadata } from 'next'
import Image from 'next/image'
import { getProduct } from '@/app/lib/products'
import AddToCart from '@/app/components/AddToCart'
import ProductImageCarousel from '@/app/components/ProductImageCarousel'
import ArtistInfo from '@/app/components/ArtistInfo'
import ReviewSection from '@/app/components/ReviewSection'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.id)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.title} by ${product.artist} | Art Gallery`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id)
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductImageCarousel images={[product.imageUrl]} />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {product.artist}</p>
          <p className="text-2xl font-bold mb-6">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="w-full max-w-md">
            <AddToCart productId={product.id} />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <ArtistInfo artist={product.artist} />
      </div>

      <div>
        <ReviewSection productId={product.id} />
      </div>
    </main>
  )
} 