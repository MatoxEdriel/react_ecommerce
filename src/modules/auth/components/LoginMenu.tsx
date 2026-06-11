import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLogin } from '@/modules/auth/hooks/useLogin'

const buttonClasses =
  'cursor-pointer rounded-md border-2 border-transparent bg-primary-soft px-3.5 py-1.5 text-[15px] text-primary-deep transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-primary'

const inputClasses =
  'rounded-md border border-line bg-surface px-2.5 py-1.5 text-[15px] text-heading focus-visible:outline-2 focus-visible:outline-primary'

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
      <div className="flex items-center gap-3">
        <span className="text-[15px] text-heading">Hola, {user.name}</span>
        <button type="button" className={buttonClasses} onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    )
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className={buttonClasses}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        Iniciar sesión
      </button>

      {open && (
        <form
          className="absolute top-full right-0 z-20 mt-2.5 flex w-60 flex-col gap-3 rounded-lg border border-line bg-card p-4 text-left shadow-lg"
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
      )}
    </div>
  )
}
