import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '@/routes/AppLayout'
import ProtectedRoute from '@/routes/ProtectedRoute'
import ProductListPage from '@/modules/products/pages/ProductListPage'
import ProductDetailPage from '@/modules/products/pages/ProductDetailPage'
import LoginPage from '@/modules/auth/pages/LoginPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<ProductListPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="products/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
