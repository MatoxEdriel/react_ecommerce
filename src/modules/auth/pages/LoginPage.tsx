import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { Location } from 'react-router-dom'
import { useAuth } from '@/context/authContext'

const inputClasses =
  'rounded-md border border-line bg-surface px-2.5 py-1.5 text-[15px] text-heading focus-visible:outline-2 focus-visible:outline-primary'

export default function LoginPage() {
  const { user, loading, error, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const from = (location.state as { from?: Location } | null)?.from?.pathname ?? '/'

  useEffect(() => {
    if (user) navigate(from, { replace: true })
  }, [user, from, navigate])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    void login({ email, password })
  }

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="mb-6 text-3xl font-medium tracking-tight text-heading">Iniciar sesión</h1>
      <form
        className="flex flex-col gap-3 rounded-lg border border-line bg-card p-5 text-left"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-1 text-sm text-heading">
          Email
          <input
            type="email"
            className={inputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-heading">
          Contraseña
          <input
            type="password"
            className={inputClasses}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error && <p className="text-[13px] text-secondary-deep">{error}</p>}
        <button
          type="submit"
          className="cursor-pointer rounded-md border-none bg-primary p-2 text-[15px] text-white transition-opacity disabled:cursor-wait disabled:opacity-60 dark:text-heading"
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
