import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/"><h1>MiEcommerce</h1></Link>
        <nav>
          <Link to="/">Home</Link> | <Link to="/register">Registro</Link> | <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>Trabajo práctico - React</p>
      </footer>
    </div>
  )
}
