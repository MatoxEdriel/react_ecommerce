import Header from '@/components/Header/Header'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import LoginMenu from '@/modules/auth/components/LoginMenu'
import { useProducts } from '@/hooks/useProducts'
import './App.css'

function App() {
  const { data: products, loading, error } = useProducts()

  return (
    <div className="App">
      <Header title="Greenfield Store" rightSlot={<LoginMenu />} />

      <main className="catalog">
        <h1>Productos</h1>
        {loading && <p>Cargando productos...</p>}
        {error && <p className="catalog-error">{error}</p>}
        {!loading && !error && <ProductGrid products={products} />}
      </main>
    </div>
  )
}

export default App
