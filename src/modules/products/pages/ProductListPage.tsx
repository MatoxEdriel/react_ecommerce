import ProductGrid from '@/components/ProductGrid/ProductGrid'
import { useProducts } from '@/hooks/useProducts'

export default function ProductListPage() {
  const { data: products, loading, error } = useProducts()

  return (
    <>
      <h1 className="mb-6 text-4xl font-medium tracking-tight text-heading">Productos</h1>
      {loading && <p>Cargando productos...</p>}
      {error && <p className="text-secondary-deep">{error}</p>}
      {!loading && !error && products.length === 0 && (
        <p className="text-body">Aún no hay productos disponibles.</p>
      )}
      {!loading && !error && products.length > 0 && <ProductGrid products={products} />}
    </>
  )
}
