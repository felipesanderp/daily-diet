// import { produce } from 'immer'

import { ActionsTypes } from './actions'

export interface Meal {
  id: string
  user_id: string
  name: string
  description: string
  isOnTheDiet: number
  mealDate: string
}

interface MealsState {
  meals: Meal[]
}

export function mealsReducer(state: MealsState, action: any) {
  switch (action.type) {
    case ActionsTypes.GET_USER_MEALS:
      return {
        ...state,
        meals: action.payload.data,
      }
    default:
      return state
  }
}
