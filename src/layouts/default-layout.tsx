import { Sidebar } from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  // const navigate = useNavigate()
  // const [cookies] = useCookies(['token'])

  // if (!cookies.token) {
  //   navigate('/')
  // }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app">
      <Sidebar />

      <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Outlet />
      </main>
    </div>
  )
}
