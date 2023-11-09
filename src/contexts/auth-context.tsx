import { ReactNode, createContext, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

// import { useToast } from '@/components/ui/use-toast'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User
}

interface AuthContextType {
  user: User
  signIn: (email: string, password: string) => void
  signOut: () => void
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  // const { toast } = useToast()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie, removeCookie] = useCookies(['token'])

  const navigate = useNavigate()

  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@dailydiet:user')

    if (user) {
      return { user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  async function signIn(email: string, password: string) {
    const response = await fetch('http://localhost:3333/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    if (!response.ok) {
      // toast({
      //   title: 'Erro ao realizar o login!',
      //   description: 'Verifique seu e-mail ou senha',
      //   variant: 'destructive',
      // })
      console.error('error no login')
    } else {
      const { token, user } = await response.json()

      setCookie('token', token)
      localStorage.setItem('@dailydiet:user', JSON.stringify(user))
      setData({
        user,
      })

      navigate('/dashboard')
    }
  }

  async function signOut() {
    removeCookie('token')
    localStorage.removeItem('@dailydiet:user')

    setData({} as AuthState)
  }

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
