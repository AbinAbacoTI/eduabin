import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Card from 'components/Card/index'

const payments = () => {
  return (
    <SidebarLayout>
      <div className="bg-orange-500 w-full py-5 px-5 content-center">
        <div className="text-2xl text-center text-white font-bold m-8">
          Pendiente de aprobacion
        </div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Nombre de Usuario</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">wants to be your friend</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SidebarLayout>
  )
}

export default payments
