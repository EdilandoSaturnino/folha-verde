import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import useCartStore from '../../store/useCartStore'

function Header() {
  const { data: session } = useSession()
  const cartItems = useCartStore((state) => state.items)

  return (
    <header className='bg-green-600 text-white'>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold'>
          Folha Verde
        </Link>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/cart'>Carrinho ({cartItems.length})</Link>
            </li>
            {session ? (
              <>
                <li>
                  <Link href='/profile'>Perfil</Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Sair</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href='/login'>Entrar</Link>
                </li>
                <li>
                  <Link href='/register'>Registrar</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
