import React from 'react'
import CartItem from './CartItem'
import useCartStore from '../../store/useCartStore'
import { formatCurrency } from '../../utils/formatCurrency'

function CartSidebar() {
  const items = useCartStore((state) => state.items)
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h2 className='text-2xl font-bold mb-4'>Seu Carrinho</h2>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className='mt-4 text-xl font-bold'>Total: {formatCurrency(total)}</div>
        </>
      )}
    </div>
  )
}

export default CartSidebar
