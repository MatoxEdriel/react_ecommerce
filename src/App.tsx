import Header from '@/components/Header/Header'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import LoginMenu from '@/modules/auth/components/LoginMenu'
import { useProducts } from '@/hooks/useProducts'

function App() {
  const { data: products, loading, error } = useProducts()

  return (
    <div className="mx-auto flex min-h-svh w-[1126px] max-w-full flex-col border-x border-line">
      <Header title="Greenfield Store" rightSlot={<LoginMenu />} />

      <main className="p-6 text-left">
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-heading">Productos</h1>
        {loading && <p>Cargando productos...</p>}
        {error && <p className="text-secondary-deep">{error}</p>}
        {!loading && !error && <ProductGrid products={products} />}
      </main>
    </div>
  )
}

export default App
