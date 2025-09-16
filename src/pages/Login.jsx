import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [msg, setMsg] = useState(null)
  const navigate = useNavigate()

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setMsg({ type: 'error', text: 'Completa email y contraseña.' })
      return
    }
    // solo maqueta: mostramos mensaje y redirigimos
    setMsg({ type: 'success', text: `Login correcto (maquetado): ${form.email}` })
    setTimeout(() => navigate('/'), 800)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="form" noValidate>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={onChange} required />
        </label>
        <label>Contraseña
          <input name="password" type="password" value={form.password} onChange={onChange} required />
        </label>
        <button type="submit">Entrar</button>
      </form>

      {msg && (
        <div style={{
          marginTop: 12,
          padding: 10,
          borderRadius: 6,
          color: msg.type === 'success' ? '#155724' : '#721c24',
          background: msg.type === 'success' ? '#d4edda' : '#f8d7da',
          border: `1px solid ${msg.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {msg.text}
        </div>
      )}
    </div>
  )
}
