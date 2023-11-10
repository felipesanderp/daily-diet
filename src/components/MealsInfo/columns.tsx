import { ColumnDef } from '@tanstack/react-table'

import { statuses } from './data/data'
import { Meal } from './data/schema'

import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { Checkbox } from '../ui/checkbox'

export const columns: ColumnDef<Meal>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[80px] truncate font-medium">
        {row.getValue('name')}
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue('description')}
      </div>
    ),
  },
  {
    accessorKey: 'mealDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue('mealDate'))

      return (
        <div>
          <span>{date.toLocaleDateString('pt-BR')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'mealHour',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hora" />
    ),
    cell: ({ row }) => {
      return (
        <div>
          <span>{row.getValue('mealHour')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'isOnTheDiet',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Na dieta?" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('isOnTheDiet'),
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[150px] items-center">
          {status.icon && (
            <status.icon className="text-muted-foreground mr-2 h-4 w-4" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
