import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Tabla from 'components/common/Table'

const Admin = () => {
  return (

    <SidebarLayout>
      <div className="bg-orange-500 w-full py-5 px-5 content-center">

        {/* DashBoard */}
        <div className="bg-white rounded-lg w-6/6 p-5 m-8 text-center" >
          DashBoard
        </div>

        {/* Vista de los datos */}
        <div className="rounded-lg w-6/6 p-5 m-8 text-center" >
          <div className=" grid grid-cols-3 gap-x-20 gap-y-4">
            <div className="bg-white shadow-inner rounded-full grid grid-cols-6 items-center">
              <div className="col-span-2">
                <p className="text-center p-3 text-4xl">8</p>
              </div>
              <div className="col-span-3">
                <p className="text- center p-3">Nuevos Usuarios registrados</p>
              </div>
            </div>
            <div className="bg-white shadow-inner rounded-full grid grid-cols-6 items-center">
              <div className="col-span-2">
                <p className="text-center p-3 text-4xl">8</p>
              </div>
              <div className="col-span-3">
                <p className="text- center p-3">Nuevos Usuarios registrados</p>
              </div>
            </div>
            <div className="bg-white shadow-inner rounded-full grid grid-cols-6 items-center">
              <div className="col-span-2">
                <p className="text-center p-3 text-4xl">8</p>
              </div>
              <div className="col-span-3">
                <p className="text- center p-3">Nuevos Usuarios registrados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de los datos */}
        <div className="rounded-lg w-6/6 p-5 ">
          <div className="flex flex-col xs:flex-row items-end xs:justify-between">
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="w-40 h-12 border-2 border-white text-black hover:text-white font-bold text-base bg-gray-100 dark:bg-gray-700 hover:bg-gray-700">
                Usuarios
              </button>
              <button className="w-40 h-12 border-2 border-white text-black hover:text-white font-bold text-base bg-gray-100 dark:bg-gray-700 hover:bg-gray-700">
                Cursos
              </button>
              <button className="w-40 h-12 border-2 border-white text-black hover:text-white font-bold text-base bg-gray-100 dark:bg-gray-700 hover:bg-gray-700">
                Pagos
              </button>
            </div>
          </div>

          <Tabla
           headers={['Accion', 'Fecha']}
           data={[['1', '1'], ['2', '2'], ['2', '2']]
          }
          />
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-end xs:justify-between rounded-b-lg">
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="w-full border-2 text-black hover:text-white font-bold text-base bg-gray-100 dark:bg-gray-700 hover:bg-gray-700">
                Ver mas ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default Admin
