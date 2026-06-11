import { useEffect, useState } from 'react'
import type { Product } from '@/interfaces/product'
import { getProducts } from '@/services/productService'

interface UseProductsResult {
  data: Product[]
  loading: boolean
  error: string | null
}

export function useProducts(): UseProductsResult {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    getProducts()
      .then((products) => {
        if (!cancelled) setData(products)
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Error al cargar productos')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}
