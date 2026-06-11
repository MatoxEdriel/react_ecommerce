import type { Product } from '@/interfaces/product'
import './ProductGrid.css'

interface Props {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  return (
    <ul className="product-grid">
      {products.map((product) => (
        <li key={product.id} className="product-card">
          <span className="product-emoji" aria-hidden="true">
            {product.emoji}
          </span>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  )
}
