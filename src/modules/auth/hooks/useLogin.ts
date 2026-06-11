import { useState } from 'react'
import type { AuthUser, LoginCredentials } from '@/interfaces/auth'
import { login as loginRequest } from '@/services/authService'

interface UseLoginResult {
  user: AuthUser | null
  loading: boolean
  error: string | null
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
}

export function useLogin(): UseLoginResult {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      setUser(await loginRequest(credentials))
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  const logout = (): void => {
    setUser(null)
    setError(null)
  }

  return { user, loading, error, login, logout }
}
