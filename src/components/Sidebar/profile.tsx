import { LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { useAuth } from '@/contexts/auth-context'

export function Profile() {
  const { user, signOut } = useAuth()

  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/diego3g.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          {user.name}
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          {user.email}
        </span>
      </div>
      <Button type="button" variant="ghost" onClick={signOut}>
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
