import { useEffect, useState } from 'react'
import type { Product } from '@/interfaces/product'
import { getProductById } from '@/services/productService'

interface UseProductResult {
  data: Product | null
  loading: boolean
  error: string | null
}

export function useProduct(id: string | undefined): UseProductResult {
  const [data, setData] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false

    getProductById(id)
      .then((product) => {
        if (!cancelled) setData(product)
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Error al cargar el producto')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [id])

  return { data, loading, error }
}
