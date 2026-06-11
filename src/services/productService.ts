import type { Product } from '@/interfaces/product'

const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Teclado mecánico', description: 'Switches rojos, RGB', price: 89.99, emoji: '⌨️' },
  { id: 'p2', name: 'Mouse inalámbrico', description: '8 botones programables', price: 45.5, emoji: '🖱️' },
  { id: 'p3', name: 'Monitor 27"', description: 'IPS 144Hz QHD', price: 299.0, emoji: '🖥️' },
  { id: 'p4', name: 'Audífonos', description: 'Cancelación de ruido', price: 120.0, emoji: '🎧' },
  { id: 'p5', name: 'Webcam HD', description: '1080p con micrófono', price: 59.9, emoji: '📷' },
  { id: 'p6', name: 'Hub USB-C', description: '7 puertos, HDMI 4K', price: 35.0, emoji: '🔌' },
]

// Mock implementation — replace with a real API call later.
export async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return MOCK_PRODUCTS
}
