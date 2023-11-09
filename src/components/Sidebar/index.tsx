import * as Collapsible from '@radix-ui/react-collapsible'
import { Home, Menu, User } from 'lucide-react'

import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { Button } from '../button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:w-80 lg:border-r lg:px-5 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between gap-6 lg:justify-normal">
        <Logo />
        <span className="hidden lg:block">Daily Diet</span>
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <nav className="space-y-2">
          <NavItem title="Dashboard" icon={Home} />
          <NavItem title="Profile" icon={User} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
