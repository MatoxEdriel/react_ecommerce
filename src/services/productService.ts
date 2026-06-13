import type { Product } from '@/interfaces/product'

// Mock implementation — replace the body with a real API call later.
// Sin productos quemados: queda listo para conectar una fuente de datos real.
export async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return []
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts()
  return products.find((product) => product.id === id) ?? null
}
