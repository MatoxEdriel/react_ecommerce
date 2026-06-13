import { useState } from 'react'
import type { ReactNode } from 'react'
import type { AuthUser, LoginCredentials } from '@/interfaces/auth'
import { login as loginRequest } from '@/services/authService'
import { AuthContext } from '@/context/authContext'
import type { AuthContextValue } from '@/context/authContext'

const STORAGE_KEY = 'greenfield.auth'

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AuthUser) : null
  } catch {
    return null
  }
}

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      const loggedUser = await loginRequest(credentials)
      setUser(loggedUser)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser))
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  const logout = (): void => {
    setUser(null)
    setError(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const value: AuthContextValue = { user, loading, error, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
