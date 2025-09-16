import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ p }) {
  return (
    <div className="card">
      <h3>{p.name}</h3>
      <p><strong>Precio:</strong> ${p.price.toFixed(2)}</p>
      <p><strong>Stock:</strong> {p.stock}</p>
      <p><strong>Código:</strong> {p.code}</p>
      <Link to={`/product/${p.id}`} className="btn">Ver detalle</Link>
    </div>
  )
}
