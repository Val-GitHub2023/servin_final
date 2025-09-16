import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div>
      <h2>Listado de productos</h2>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  )
}
