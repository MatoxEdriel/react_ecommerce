import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'

export default function AppLayout() {
  return (
    <div className="mx-auto flex min-h-svh w-[1126px] max-w-full flex-col border-x border-line">
      <Navbar />
      <main className="p-6 text-left">
        <Outlet />
      </main>
    </div>
  )
}
