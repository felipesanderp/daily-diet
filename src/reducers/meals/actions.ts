import { Meal } from './meals'

export enum ActionsTypes {
  GET_USER_MEALS = 'GET_USER_MEALS',
}

export function getUserMealsAction(data: Meal) {
  return {
    type: ActionsTypes.GET_USER_MEALS,
    payload: {
      data,
    },
  }
}
