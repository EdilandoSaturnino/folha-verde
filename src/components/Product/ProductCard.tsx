import React from 'react'
import Image from 'next/image'
import { Product } from '../../types/product'
import useCartStore from '../../store/useCartStore'
import { formatCurrency } from '../../utils/formatCurrency'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <div className='border rounded-lg p-4 flex flex-col'>
      <Image src={product.image} alt={product.name} width={200} height={200} className='w-full h-48 object-cover mb-4' />
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-600 mb-2'>{product.description}</p>
      <p className='text-xl font-bold mb-4'>{formatCurrency(product.price)}</p>
      <button onClick={() => addItem(product)} className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors mt-auto'>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default ProductCard
