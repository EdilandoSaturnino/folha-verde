import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout/Layout'
import ProductList from '../components/Product/ProductList'
import { Product } from '../types/product'
import api from '../lib/api'

interface HomeProps {
  products: Product[]
}

function Home({ products }: HomeProps) {
  return (
    <Layout>
      <h1 className='text-3xl font-bold mb-8'>Nossos Produtos</h1>
      <ProductList products={products} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<Product[]>('/products')
    return {
      props: {
        products: data,
      },
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      props: {
        products: [],
      },
    }
  }
}

export default Home
