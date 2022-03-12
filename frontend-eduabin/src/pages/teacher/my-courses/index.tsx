import Card from 'components/Cards/CardCourse'
import SidebarLayout from 'components/common/Layouts/SidebarLayout'

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
            <div className='flex flex-wrap h-96 overflow-hidden overflow-y-scroll'>
                <Card publicCard={false}/>
                <Card publicCard={false}/>
                <Card publicCard={false}/>
                <Card publicCard={false}/>
            </div>
          </div>
        </section>
        <section className='bg-gray-100 p-5 my-5'>
          <div>
            <h1 className='text-2xl'>Sin publicar</h1>
            <div className='flex flex-wrap h-96 overflow-hidden overflow-y-scroll'>
                <Card published={false}
                publicCard={false}/>
                <Card published={false}
                publicCard={false}/>
                <Card published={false}
                publicCard={false}/>
                <Card published={false}
                publicCard={false}/>
            </div>
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
