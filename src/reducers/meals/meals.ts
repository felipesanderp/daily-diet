import { produce } from 'immer'

import { ActionsTypes } from './actions'

export interface Meal {
  id: string
  user_id: string
  name: string
  description: string
  isOnTheDiet: number
  mealDate: string
}

export interface Summary {
  totalMeals: number
  totalOnTheDiet: number
  totalOutsideTheDiet: number
}

interface MealsState {
  meals: Meal[]
  summary: Summary
}

export function mealsReducer(state: MealsState, action: any) {
  switch (action.type) {
    case ActionsTypes.GET_USER_MEALS:
      return {
        ...state,
        meals: action.payload.data,
      }
    case ActionsTypes.GET_USER_MEALS_SUMMARY:
      return {
        ...state,
        summary: action.payload.data,
      }
    case ActionsTypes.REMOVE_MEAL: {
      const currentMealIndex = state.meals.findIndex((meal) => {
        return meal.id === action.payload.id
      })

      if (currentMealIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.meals.splice(currentMealIndex, 1)
      })
    }
    default:
      return state
  }
}
