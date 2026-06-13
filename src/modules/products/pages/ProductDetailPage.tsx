import { Link, useParams } from 'react-router-dom'
import { useProduct } from '@/hooks/useProduct'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data: product, loading, error } = useProduct(id)

  return (
    <>
      <Link to="/" className="mb-6 inline-block text-[15px] text-primary-deep hover:underline">
        ← Volver a productos
      </Link>

      {loading && <p>Cargando producto...</p>}
      {error && <p className="text-secondary-deep">{error}</p>}
      {!loading && !error && !product && <p className="text-body">Producto no encontrado.</p>}

      {!loading && !error && product && (
        <article className="flex flex-col items-start gap-3 rounded-xl border border-line bg-card p-6">
          <span className="text-6xl" aria-hidden="true">
            {product.emoji}
          </span>
          <h1 className="text-3xl font-medium text-heading">{product.name}</h1>
          <p className="text-body">{product.description}</p>
          <span className="rounded bg-secondary-soft px-2.5 py-1 font-mono text-lg text-secondary-deep">
            ${product.price.toFixed(2)}
          </span>
        </article>
      )}
    </>
  )
}
