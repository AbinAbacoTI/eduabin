import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Card from 'components/Cards/CardCourse/index'

const payments = () => {
  return (
    <SidebarLayout>
      <div className="bg-white w-full h-full py-5 px-10 content-center">
        <div className="text-2xl text-center text-black font-bold m-8">
          Pagos de cursos
        </div>
        <div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl px-20">
          <div className="flex border-2 justify-around items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Nombre de estudiante</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">Curso comprado</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">Precio de curso: S/.00.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl px-20 my-5">
          <div className="flex border-2 justify-around items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Nombre de estudiante</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">Curso comprado</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">Precio de curso: S/.00.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl px-20 my-5">
          <div className="flex border-2 justify-around items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Nombre de estudiante</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">Curso comprado</span>
              </div>
              <div className="font-semibold">
                <span className="text-gray-400">Precio de curso: S/.00.00</span>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </SidebarLayout>
  )
}

export default payments
