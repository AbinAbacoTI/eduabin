import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Rating from 'components/ui/Rating'

const MyCourses = () => {
  return (
    <SidebarLayout>
      <div className='container mx-auto px-20'>
        <div className='my-5'>
          <h1 className='text-4xl font-semibold'>Mis Cursos</h1>
        </div>
        <section className='bg-gray-100 p-5 rounded-lg'>
          <div>
            <h1 className='text-2xl'>Publicados</h1>
            <div className='flex'>
                <div className='border-2 bg-white w-48 h-40 p-2 rounded-md'>
                  <div>
                    image
                  </div>
                  <div>
                    <h2>Nombre de curso</h2>
                  </div>
                  <div><Rating value={3}/></div>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className='text-2xl'>Sin publicar</h1>
            <div className='flex'></div>
          </div>
        </section>
        <section>
          <div>
            <h1 className='text-2xl'>Pendiente de aprobacion</h1>
            <div className='flex'></div>
          </div>
        </section>
      </div>
    </SidebarLayout>
  )
}

export default MyCourses
