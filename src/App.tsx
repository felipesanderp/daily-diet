import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import { Router } from './Router'
import { AuthProvider } from './contexts/auth-context'

export function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </CookiesProvider>
    </BrowserRouter>
  )
}
