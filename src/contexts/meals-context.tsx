import { ActionsTypes } from '@/reducers/meals/actions'
import { Meal, mealsReducer } from '@/reducers/meals/meals'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { useCookies } from 'react-cookie'

interface MealsContextType {
  meals: Meal[]
}

interface MealsContextProps {
  children: ReactNode
}

export const MealsContext = createContext({} as MealsContextType)

export function MealsProvider({ children }: MealsContextProps) {
  const [mealsState, dispatch] = useReducer(mealsReducer, {
    meals: [],
  })

  const [cookies] = useCookies(['token'])

  const { meals } = mealsState

  useEffect(() => {
    async function getMeals() {
      const response = await fetch('http://localhost:3333/meals', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })

      const data = await response.json()

      dispatch({
        type: ActionsTypes.GET_USER_MEALS,
        payload: {
          data,
        },
      })
    }

    getMeals()
  }, [cookies.token])

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  )
}

export const useMeals = () => useContext(MealsContext)
