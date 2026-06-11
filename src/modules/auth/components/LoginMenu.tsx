import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLogin } from '@/modules/auth/hooks/useLogin'
import './LoginMenu.css'

export default function LoginMenu() {
  const { user, loading, error, login, logout } = useLogin()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    void login({ email, password })
  }

  if (user) {
    return (
      <div className="login-menu">
        <span className="login-user">Hola, {user.name}</span>
        <button type="button" className="login-button" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    )
  }

  return (
    <div className="login-menu">
      <button
        type="button"
        className="login-button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        Iniciar sesión
      </button>

      {open && (
        <form className="login-panel" onSubmit={handleSubmit}>
          <label className="login-field">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label className="login-field">
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </label>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      )}
    </div>
  )
}
