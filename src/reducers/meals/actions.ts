import { Meal, Summary } from './meals'

export enum ActionsTypes {
  GET_USER_MEALS = 'GET_USER_MEALS',
  GET_USER_MEALS_SUMMARY = 'GET_USER_MEALS_SUMMARY',
}

export function getUserMealsAction(data: Meal) {
  return {
    type: ActionsTypes.GET_USER_MEALS,
    payload: {
      data,
    },
  }
}

export function getUserMelasSummary(data: Summary) {
  return {
    type: ActionsTypes.GET_USER_MEALS_SUMMARY,
    payload: {
      data,
    },
  }
}
