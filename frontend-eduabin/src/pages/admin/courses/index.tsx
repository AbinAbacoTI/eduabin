import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Card from 'components/Cards/CardCourse/index'

const courses = () => {
  return (
    <SidebarLayout>
      <div className="bg-orange-500 w-full py-5 px-5 content-center">
        <div className="text-2xl text-center text-white font-bold m-8">
          Pendiente de aprobacion
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card /><Card /><Card /><Card />
        </div>
        <div className="rounded-full w-6/6 p-5">

          <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Nombre del Curso
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  N* de Lecciones
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Fecha de solicitud
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Estado
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Precio
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Autor
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">curso</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">23/02/2022</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">publicado</span>
                  </span></td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">300.00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Fulano de Tal</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='grid'>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Revisar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Aceptar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Rechazar</a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">curso</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">23/02/2022</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                    <span className="relative">No publicado</span>
                  </span></td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">300.00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Fulano de Tal</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='grid'>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Revisar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Aceptar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Rechazar</a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">curso</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">23/02/2022</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Publicado</span>
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">300.00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Fulano de Tal</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='grid'>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Revisar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Aceptar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Rechazar</a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">curso</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">23/02/2022</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Publicado</span>
                  </span></td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">300.00</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Fulano de Tal</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='grid'>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Revisar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Aceptar</a>
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Rechazar</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </SidebarLayout>
  )
}

export default courses
