export function MealsInfo() {
  return (
    <div className="flex flex-1 flex-col p-14">
      <h1 className="text-2xl text-gray-500">Minhas refeições</h1>

      <div className="mt-8 flex-1 overflow-auto">
        <table className="w-full min-w-[600px] border-collapse border-spacing-x-0">
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
            <tr className="bg-gray-700 text-sm/6 text-gray-100">
              <td className="p-4 first:rounded-bl-lg">X burger</td>
              <td>14/10/2023</td>
              <td>19:00</td>
              <td>Na dieta</td>
              <td className="last:rounded-br-lg"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
