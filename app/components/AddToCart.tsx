"use client";
import React from 'react'
import { useCart } from '../hooks/useCart'

interface AddToCartProps {
  productId: string
}

const AddToCart = ({ productId }: AddToCartProps) => {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(productId)}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
  )
}

export default AddToCart
