import { ActionsTypes, removeMealAction } from '@/reducers/meals/actions'
import { Meal, Summary, mealsReducer } from '@/reducers/meals/meals'
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
  summary: Summary
  removeTask: (id: string) => Promise<boolean>
}

interface MealsContextProps {
  children: ReactNode
}

export const MealsContext = createContext({} as MealsContextType)

export function MealsProvider({ children }: MealsContextProps) {
  const [mealsState, dispatch] = useReducer(mealsReducer, {
    meals: [],
    summary: {},
  })

  const [cookies] = useCookies(['token'])

  const { meals, summary } = mealsState

  useEffect(() => {
    if (cookies.token) {
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
            data: data.meals,
          },
        })
      }

      getMeals()
    }
  }, [cookies.token])

  useEffect(() => {
    async function getSummary() {
      const response = await fetch('http://localhost:3333/meals/summary', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })

      const data = await response.json()

      dispatch({
        type: ActionsTypes.GET_USER_MEALS_SUMMARY,
        payload: {
          data: data.summary,
        },
      })
    }

    getSummary()
  }, [cookies.token, meals])

  async function removeTask(id: string) {
    const response = await fetch(`http://localhost:3333/meals/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    })

    if (!response.ok) {
      return false
    }

    dispatch(removeMealAction(id))

    return true
  }

  return (
    <MealsContext.Provider value={{ meals, summary, removeTask }}>
      {children}
    </MealsContext.Provider>
  )
}

export const useMeals = () => useContext(MealsContext)
