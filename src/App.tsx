import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import { Router } from './Router'
import { AuthProvider } from './contexts/auth-context'
import { MealsProvider } from './contexts/meals-context'

export function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <AuthProvider>
          <MealsProvider>
            <Router />
          </MealsProvider>
        </AuthProvider>
      </CookiesProvider>
    </BrowserRouter>
  )
}
