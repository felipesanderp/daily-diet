import { useMeals } from '@/contexts/meals-context'
import { Equal, Frown, Smile } from 'lucide-react'

export function InfoCard() {
  const { summary } = useMeals()

  const isOnTheDietPercentage = Math.round(
    (summary.totalOnTheDiet / summary.totalMeals) * 100,
  )

  const isOutsideTheDietPercentage = Math.round(
    (summary.totalOutsideTheDiet / summary.totalMeals) * 100,
  )

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-8 rounded-lg border border-violet-300 bg-white px-4 py-5 shadow-sm">
        <div className="flex items-center justify-between space-y-1">
          <span className="text-xl/5 font-medium text-zinc-500">Na dieta</span>
          <Smile className="h-6 w-6 text-violet-400" />
        </div>

        <div className="flex items-baseline gap-2">
          <p className="text-3xl/5 font-bold text-zinc-700">
            {isOnTheDietPercentage}%
          </p>
          <span className="text-sm/5 font-semibold text-zinc-500">
            {summary.totalOnTheDiet}/{summary.totalMeals}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 rounded-lg border border-violet-300 bg-white px-4 py-5 shadow-sm">
        <div className="flex items-center justify-between space-y-1">
          <span className="text-xl/5 font-medium text-zinc-500">
            Fora da Dieta
          </span>
          <Frown className="h-6 w-6 text-violet-400" />
        </div>

        <div className="flex items-baseline gap-2">
          <p className="text-3xl/5 font-bold text-zinc-700">
            {isOutsideTheDietPercentage}%
          </p>
          <span className="text-sm/5 font-semibold text-zinc-500">
            {summary.totalOutsideTheDiet}/{summary.totalMeals}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 rounded-lg border border-violet-300 bg-white px-4 py-5 shadow-sm">
        <div className="flex items-center justify-between space-y-1">
          <span className="text-xl/5 font-medium text-zinc-500">Total</span>
          <Equal className="h-6 w-6 text-violet-400" />
        </div>

        <div className="flex items-baseline gap-2">
          <p className="text-3xl/5 font-bold text-zinc-700">
            {summary.totalMeals}
          </p>
        </div>
      </div>
    </div>
  )
}
