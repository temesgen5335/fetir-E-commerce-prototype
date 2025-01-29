'use client'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Product } from '../lib/products'
import AddToCart from './AddToCart'

interface QuickViewProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

const QuickView = ({ product, isOpen, onClose }: QuickViewProps) => {
  if (!product) return null

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl transform rounded-lg bg-white p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-80">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div>
                    <Dialog.Title className="text-2xl font-bold mb-2">
                      {product.title}
                    </Dialog.Title>
                    <p className="text-gray-600 mb-4">by {product.artist}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-4">
                      ${product.price}
                    </p>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    {product.materials && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Materials:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.materials.map(material => (
                            <span
                              key={material}
                              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.dimensions && (
                      <p className="text-gray-600 mb-6">
                        Dimensions: {product.dimensions}
                      </p>
                    )}

                    <AddToCart productId={product.id} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default QuickView 