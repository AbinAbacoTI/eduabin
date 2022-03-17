import SidebarLayout from 'components/common/Layouts/SidebarLayout'

const info = () => {
  return (
    <SidebarLayout>
      <div className="w-11/12 m-auto py-10 px-1">
        <p className="text-4xl">Método de cobro</p>
        <br></br>
        <div className="mb-6">
          <label
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            Asociar método de cobro
          </label>
          <br></br>
          <div className="flex items-center justify-around h-full border-2 ">
          <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-3/12"
        >
          Paypal en USD
        </button>
        <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-3/12"
        >
          Tansferencia bancaria
        </button>
        </div>
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 w-6/12"
          >
            Método de cobro asociado(a):
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 w-12/12 flex justify-center"
          >
            Actualmente no cuentas con un método de pago asociado
          </label>
        </div>
      </div>
    </SidebarLayout>
  )
}
export default info
