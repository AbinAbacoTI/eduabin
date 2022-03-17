import SidebarLayout from 'components/common/Layouts/SidebarLayout'

const info = () => {
  return (
    <SidebarLayout>
      <div className="w-11/12 m-auto py-10 px-1">
        <p className="text-4xl">Otras configuraciones</p>
        <br></br>
        <div className="mb-6">
        <div className="flex items-center justify-around h-full border-2 ">
          <label
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            Revisar Términos y Condiciones Generales
          </label>
          <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-3/12"
        >
          Revisar
        </button>
        </div>
        <br></br>
        <div className="flex items-center justify-around h-full border-2 ">
          <label
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            Desactivar Permanentemente la Cuenta
          </label>
          <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-3/12"
        >
          Eliminar
        </button>
        </div>
        </div>
      </div>
    </SidebarLayout>
  )
}
export default info
