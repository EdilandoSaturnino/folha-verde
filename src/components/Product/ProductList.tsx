import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../../types/product'

interface ProductListProps {
  products: Product[]
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
