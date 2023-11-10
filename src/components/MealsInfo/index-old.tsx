import { useMeals } from '@/contexts/meals-context'

export function MealsInfo() {
  const { meals } = useMeals()

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-2xl text-gray-500">Minhas refeições</h1>

      <div className="mt-8 flex-1 overflow-auto">
        <table className="w-full min-w-[600px] border-separate border-spacing-x-0">
          <thead>
            <tr className="bg-gray-600 text-left text-sm/6 text-gray-100 ">
              <th className="p-4 first:rounded-tl-lg">Nome</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Na dieta?</th>
              <th className="last:rounded-tr-lg">Opções</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => {
              return (
                <tr
                  key={meal.id}
                  className="bg-gray-700 text-sm/6 text-gray-100"
                >
                  <td className="p-4">{meal.name}</td>
                  <td>14/10/2023</td>
                  <td>19:00</td>
                  <td>
                    {meal.isOnTheDiet <= 0 ? 'Fora da Dieta' : 'Na dieta'}
                  </td>
                  <td className=""></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
