import { ColumnDef } from '@tanstack/react-table'

import { statuses } from './data/data'
import { Meal } from './data/schema'

import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Meal>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('name')}</div>,
  },
]
