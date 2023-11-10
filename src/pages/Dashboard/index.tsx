import { InfoCard } from '@/components/InfoCard'
import { MealsInfoTable } from '@/components/MealsInfo'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import { Plus } from 'lucide-react'

export function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between">
        <div>
          <p className="mb-2 text-3xl/5 font-bold">
            Bem vindo de volta, {user.name}
          </p>
          <span className="text-zinc-500">Gerencie suas refeições.</span>
        </div>

        <Button variant="default" className="flex items-center gap-2">
          <Plus />
          Nova refeição
        </Button>
      </div>

      <InfoCard />

      <MealsInfoTable />
    </div>
  )
}
