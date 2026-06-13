import { Link } from 'react-router-dom'
import { useAuth } from '@/context/authContext'

const buttonClasses =
  'cursor-pointer rounded-md border-2 border-transparent bg-primary-soft px-3.5 py-1.5 text-[15px] text-primary-deep transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-primary'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface px-6 py-3.5">
      <Link to="/" className="text-xl font-semibold text-heading">
        Greenfield Store
      </Link>

      {user ? (
        <div className="flex items-center gap-3">
          <span className="text-[15px] text-heading">Hola, {user.name}</span>
          <button type="button" className={buttonClasses} onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <Link to="/login" className={buttonClasses}>
          Iniciar sesión
        </Link>
      )}
    </header>
  )
}
