import type { AuthUser, LoginCredentials } from '@/interfaces/auth'

// Mock implementation — replace the body with a real API call later;
// the signature is the contract the rest of the app depends on.
export async function login({ email, password }: LoginCredentials): Promise<AuthUser> {
  await new Promise((resolve) => setTimeout(resolve, 600))

  if (!email.includes('@') || password.length < 4) {
    throw new Error('Credenciales inválidas')
  }

  return { id: '1', name: email.split('@')[0], email }
}
