import { useMeals } from '@/contexts/meals-context'
import { DataTable } from './data-table'
import { columns } from './columns'

export function MealsInfoTable() {
  const { meals } = useMeals()

  return <DataTable data={meals} columns={columns} />
}
