import { z } from 'zod'

export const mealSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  isOnTheDiet: z.number(),
  mealDate: z.string(),
})

export type Meal = z.infer<typeof mealSchema>
