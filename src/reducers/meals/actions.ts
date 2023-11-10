import { Meal, Summary } from './meals'

export enum ActionsTypes {
  GET_USER_MEALS = 'GET_USER_MEALS',
  GET_USER_MEALS_SUMMARY = 'GET_USER_MEALS_SUMMARY',
  REMOVE_MEAL = 'REMOVE_MEAL',
}

export function getUserMealsAction(data: Meal) {
  return {
    type: ActionsTypes.GET_USER_MEALS,
    payload: {
      data,
    },
  }
}

export function getUserMealsSummaryAction(data: Summary) {
  return {
    type: ActionsTypes.GET_USER_MEALS_SUMMARY,
    payload: {
      data,
    },
  }
}

export function removeMealAction(id: string) {
  return {
    type: ActionsTypes.REMOVE_MEAL,
    payload: {
      id,
    },
  }
}
