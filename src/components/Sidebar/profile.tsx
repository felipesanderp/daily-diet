import { LogOut } from 'lucide-react'
import { Button } from '../button'
// import { useAuth } from '@/contexts/auth-context'

export function Profile() {
  // const { user, signOut } = useAuth()

  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/diego3g.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Diego
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          diego@emailcom.br
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
