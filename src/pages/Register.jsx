import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [msg, setMsg] = useState(null)
  const navigate = useNavigate()
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    // validación mínima
    if (!form.name || !form.email || !form.password) {
      setMsg({ type: 'error', text: 'Completa todos los campos obligatorios.' })
      return
    }
    // mensaje de éxito
    setMsg({ type: 'success', text: `Registro completo: ${form.name}` })
    // opcional: limpiar formulario
    setForm({ name: '', email: '', password: '' })

    // (opcional) redirigir después de 1s
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={onSubmit} className="form" noValidate>
        <label>Nombre
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={onChange} required />
        </label>
        <label>Contraseña
          <input name="password" type="password" value={form.password} onChange={onChange} required />
        </label>
        <button type="submit">Registrarme</button>
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
