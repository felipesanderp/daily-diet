import { useMeals } from '@/contexts/meals-context'
import { DataTable } from './data-table'
import { columns } from './columns'

export function MealsInfoTable() {
  const { meals } = useMeals()

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Minhas refeições
          </h2>
        </div>
      </div>
      <DataTable data={meals} columns={columns} />
    </div>
  )
}
