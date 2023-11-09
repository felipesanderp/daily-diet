import { Button } from '@/components/button'
import { Plus } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between">
        <div>
          <p className="mb-2 text-3xl/5 font-bold">Bem vindo de volta, Diego</p>
          <span className="text-zinc-500">Gerencie suas refeições.</span>
        </div>

        <Button variant="primary" className="flex items-center gap-2">
          <Plus />
          Nova refeição
        </Button>
      </div>
    </div>
  )
}
