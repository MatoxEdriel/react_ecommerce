import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { Location } from 'react-router-dom'
import { useAuth } from '@/context/authContext'

// --- Small inline icons (currentColor so they inherit token text colors) ---
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path
        d="M12 3c.4 3.6 1.4 4.6 5 5-3.6.4-4.6 1.4-5 5-.4-3.6-1.4-4.6-5-5 3.6-.4 4.6-1.4 5-5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] animate-spin" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

type FieldProps = {
  label: string
  icon: ReactNode
  type: string
  value: string
  onChange: (value: string) => void
  autoComplete: string
  delayMs: number
}

function Field({ label, icon, type, value, onChange, autoComplete, delayMs }: FieldProps) {
  return (
    <label
      className="warm-anim flex flex-col gap-1.5 opacity-0 [animation:warm-rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className="text-[13px] font-medium tracking-wide text-body">{label}</span>
      <div className="group relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-body/50 transition-colors group-focus-within:text-primary-deep">
          {icon}
        </span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required
          className="w-full rounded-xl border border-line bg-surface py-3 pl-11 pr-4 text-[15px] text-heading transition-shadow placeholder:text-body/40 focus-visible:border-primary focus-visible:outline-none focus-visible:[box-shadow:0_0_0_3px_color-mix(in_srgb,var(--primary)_28%,transparent)]"
        />
      </div>
    </label>
  )
}

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
    <section className="relative flex min-h-[calc(100svh-9rem)] items-center justify-center overflow-hidden">
      {/* Atmospheric floating blobs */}
      <div
        aria-hidden
        className="warm-anim pointer-events-none absolute -left-16 top-4 h-64 w-64 rounded-full bg-primary-soft blur-3xl [animation:warm-float_9s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="warm-anim pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-secondary-soft blur-3xl [animation:warm-float_11s_ease-in-out_-3s_infinite]"
      />

      <div
        className="warm-anim relative grid w-full max-w-4xl overflow-hidden rounded-[28px] border border-line bg-card opacity-0 [animation:warm-rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both] [box-shadow:0_40px_90px_-50px_color-mix(in_srgb,var(--secondary)_55%,transparent)] md:grid-cols-2"
      >
        {/* --- Decorative warm panel --- */}
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-primary-soft p-9 md:flex">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,var(--secondary),transparent_70%)] opacity-30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,var(--primary),transparent_70%)] opacity-40"
          />

          <div className="relative flex items-center gap-2.5 text-heading">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-card text-primary-deep [box-shadow:0_8px_20px_-8px_color-mix(in_srgb,var(--secondary)_60%,transparent)]">
              <SparkIcon />
            </span>
            <span className="text-lg font-semibold tracking-tight">Tienda</span>
          </div>

          <div className="relative">
            <h2 className="text-[2rem] font-semibold leading-[1.15] tracking-tight text-heading">
              Sabores que se sienten
              <br />
              como en casa.
            </h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-body">
              Inicia sesión para retomar tu carrito y descubrir lo nuevo de la temporada.
            </p>
          </div>

          <div className="relative flex items-center gap-3 rounded-2xl border border-line bg-card/70 px-4 py-3 text-[13px] text-body backdrop-blur">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep">
              ★
            </span>
            <span>
              <span className="font-semibold text-heading">+2.400</span> pedidos entregados con cariño
              esta semana.
            </span>
          </div>
        </aside>

        {/* --- Form panel --- */}
        <div className="p-8 sm:p-10">
          <header
            className="warm-anim mb-7 opacity-0 [animation:warm-rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ animationDelay: '60ms' }}
          >
            <h1 className="text-[1.75rem] font-semibold tracking-tight text-heading">
              Bienvenido de nuevo
            </h1>
            <p className="mt-1.5 text-[15px] text-body">Nos alegra verte por aquí otra vez.</p>
          </header>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Field
              label="Email"
              icon={<MailIcon />}
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
              delayMs={140}
            />
            <Field
              label="Contraseña"
              icon={<LockIcon />}
              type="password"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
              delayMs={210}
            />

            <div
              className="warm-anim flex items-center justify-between text-[13px] opacity-0 [animation:warm-rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: '280ms' }}
            >
              <label className="flex cursor-pointer items-center gap-2 text-body">
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer rounded border-line accent-primary"
                />
                Recordarme
              </label>
              <button
                type="button"
                className="cursor-pointer font-medium text-primary-deep transition-opacity hover:opacity-70"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {error && (
              <p className="rounded-xl bg-secondary-soft px-3.5 py-2.5 text-[13px] text-secondary-deep">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{ animationDelay: '340ms' }}
              className="warm-anim group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-[15px] font-semibold text-white opacity-0 transition-all [animation:warm-rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both] [box-shadow:0_16px_32px_-14px_color-mix(in_srgb,var(--primary)_75%,transparent)] hover:-translate-y-0.5 hover:[box-shadow:0_22px_40px_-14px_color-mix(in_srgb,var(--primary)_85%,transparent)] active:translate-y-0 disabled:cursor-wait disabled:opacity-60 dark:text-heading"
            >
              {loading ? (
                <>
                  <Spinner />
                  Entrando…
                </>
              ) : (
                <>
                  Entrar
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </>
              )}
            </button>
          </form>

          <p
            className="warm-anim mt-6 text-center text-[13px] text-body opacity-0 [animation:warm-rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ animationDelay: '420ms' }}
          >
            ¿No tienes cuenta?{' '}
            <button
              type="button"
              className="cursor-pointer font-semibold text-primary-deep transition-opacity hover:opacity-70"
            >
              Crea una
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
