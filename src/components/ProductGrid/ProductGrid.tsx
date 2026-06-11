import type { Product } from '@/interfaces/product'

interface Props {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  return (
    <ul className="grid list-none grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 p-0">
      {products.map((product) => (
        <li
          key={product.id}
          className="flex flex-col items-start gap-2 rounded-xl border border-line bg-card p-5 text-left transition-shadow hover:shadow-lg hover:shadow-secondary-soft"
        >
          <span className="text-4xl" aria-hidden="true">
            {product.emoji}
          </span>
          <h2 className="text-lg font-medium text-heading">{product.name}</h2>
          <p className="text-sm">{product.description}</p>
          <span className="mt-auto rounded bg-secondary-soft px-2 py-0.5 font-mono text-[15px] text-secondary-deep">
            ${product.price.toFixed(2)}
          </span>
        </li>
      ))}
    </ul>
  )
}
