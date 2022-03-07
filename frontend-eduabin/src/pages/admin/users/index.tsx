import SidebarLayout from 'components/common/Layouts/SidebarLayout'

const users = () => {
  return (
    <SidebarLayout>
      <div className="max-w-2xl mx-auto">
      <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="flex items-center justify-between">
                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                        <p>Ordenar por:</p>
                        <select aria-label="select" className="focus:text-orange-600 focus:outline-none bg-transparent ml-1">
                            <option className="text-sm text-orange-800">Recientes</option>
                            <option className="text-sm text-orange-800">Antiguos</option>
                        </select>
                    </div>
                </div>
            </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4">
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Tipo de Usuario
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Nombre
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Email
                      </th>
                      <th scope="col" className="p-4">
                      <button className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange-600 hover:bg-orange-500 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">Crear</p>
                    </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Admin</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Kevin Barreda</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">k.barreda@tecsup.edu.pe</td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="#" className="text-orange-600 dark:text-orange-500 hover:underline">Editar</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input id="checkbox-table-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label htmlFor="checkbox-table-2" className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Admin</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Joseph</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">j.carita@tecsup.edu.pe</td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="#" className="text-orange-600 dark:text-orange-500 hover:underline">Editar</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Profesor</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Eduardo</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">e.rodriguez@tecsup.edu.pe</td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="#" className="text-orange-600 dark:text-orange-500 hover:underline">Editar</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input id="checkbox-table-4" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label htmlFor="checkbox-table-4" className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Profesor</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Juan</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">j.obando@tecsup.edu.pe</td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="#" className="text-orange-600 dark:text-orange-500 hover:underline">Editar</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input id="checkbox-table-5" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label htmlFor="checkbox-table-5" className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Profesor</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Jack</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">jack@abin.com</td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="#" className="text-orange-600 dark:text-orange-500 hover:underline">Editar</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default users
