import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import CartSidebar from '../components/Cart/CartSidebar'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import { sendToWhatsApp } from '../utils/sendToWhatsApp'
import useCartStore from '../store/useCartStore'

function CartPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { items, clearCart } = useCartStore()

  const handleCheckout = (formData: any) => {
    if (!session) {
      router.push('/login')
      return
    }
    sendToWhatsApp(items, formData)
    clearCart()
    router.push('/')
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold mb-8'>Seu Carrinho</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <CartSidebar />
        <div>
          <h2 className='text-2xl font-bold mb-4'>Finalizar Pedido</h2>
          <CheckoutForm onSubmit={handleCheckout} />
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
