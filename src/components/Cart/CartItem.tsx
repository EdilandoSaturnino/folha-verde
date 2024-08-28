import React from 'react'
import Image from 'next/image'
import { Product } from '../../types/product'
import useCartStore from '../../store/useCartStore'
import { formatCurrency } from '../../utils/formatCurrency'

interface CartItemProps {
  item: Product
}

function CartItem({ item }: CartItemProps) {
  const removeItem = useCartStore((state) => state.removeItem)

  return (
    <div className='flex items-center space-x-4 py-2 border-b'>
      <Image src={item.image} alt={item.name} width={50} height={50} className='object-cover' />
      <div className='flex-grow'>
        <h3 className='font-semibold'>{item.name}</h3>
        <p className='text-gray-600'>{formatCurrency(item.price)}</p>
      </div>
      <button onClick={() => removeItem(item.id)} className='text-red-500 hover:text-red-700'>
        Remover
      </button>
    </div>
  )
}

export default CartItem
