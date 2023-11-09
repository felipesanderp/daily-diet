import { Sidebar } from '@/components/Sidebar'
import { useAuth } from '@/contexts/auth-context'
import { Navigate, Outlet } from 'react-router-dom'

export function DefaultLayout() {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to={'/'} replace />
  }

  return (
    <div className="min-h-screen justify-center lg:grid lg:grid-cols-app">
      <Sidebar />

      <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Outlet />
      </main>
    </div>
  )
}
