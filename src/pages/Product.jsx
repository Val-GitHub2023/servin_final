import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

export default function Product() {
  const { id } = useParams()
  const product = products.find(x => x.id === id)

  if (!product) return (
    <div>
      <h2>Producto no encontrado</h2>
      <Link to="/">Volver</Link>
    </div>
  )

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Código:</strong> {product.code}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <Link to="/">Volver al listado</Link>
    </div>
  )
}
