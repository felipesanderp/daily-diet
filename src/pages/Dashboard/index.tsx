import { InfoCard } from '@/components/InfoCard'
import { MealsInfo } from '@/components/MealsInfo'
import { Button } from '@/components/button'
import { useAuth } from '@/contexts/auth-context'
import { useMeals } from '@/contexts/meals-context'
import { Plus } from 'lucide-react'

export function DashboardPage() {
  const { user } = useAuth()
  const { meals } = useMeals()

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between">
        <div>
          <p className="mb-2 text-3xl/5 font-bold">
            Bem vindo de volta, {user.name}
          </p>
          <span className="text-zinc-500">Gerencie suas refeições.</span>
        </div>

        <Button variant="primary" className="flex items-center gap-2">
          <Plus />
          Nova refeição
        </Button>
      </div>

      <InfoCard />

      {meals.length > 0 && (
        <div>
          {meals.map((meal) => {
            return (
              <MealsInfo
                key={meal.id}
                name={meal.name}
                mealDate={meal.mealDate}
                isOnTheDiet={meal.isOnTheDiet}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
