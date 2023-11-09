import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { twMerge } from 'tailwind-merge'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  const location = useLocation()

  return (
    <Link
      to={`/${title.toLocaleLowerCase()}`}
      className={twMerge(
        'group flex items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-violet-100 dark:hover:bg-zinc-800',
        location.pathname === `/${title.toLocaleLowerCase()}`
          ? 'bg-violet-50'
          : '',
      )}
    >
      <Icon
        className={twMerge(
          'h-5 w-5 text-zinc-500 group-hover:text-violet-700',
          location.pathname === `/${title.toLowerCase()}` && 'text-violet-500',
        )}
      />
      <span
        className={twMerge(
          'font-medium  group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-300',
          location.pathname === `/${title.toLowerCase()}`
            ? 'text-violet-500'
            : 'text-zinc-700',
        )}
      >
        {title}
      </span>
      <ChevronDown
        className={twMerge(
          'ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-500  dark:text-zinc-600',
          location.pathname === `/${title.toLowerCase()}`
            ? '-rotate-90 text-violet-500 transition'
            : 'rotate-0 transition',
        )}
      />
    </Link>
  )
}
