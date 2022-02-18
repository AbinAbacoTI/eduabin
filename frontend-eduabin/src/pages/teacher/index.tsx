import Rating from 'components/ui/Rating'
import SidebarLayout from '../../components/common/Layouts/SidebarLayout'

const Teacher = () => {
  return (
    <SidebarLayout>
      <section className='container mx-auto px-20 mb-5'>
        <div className='ml-20'>
          <h2 className='text-2xl font-semibold'>Estadisticas de desempeno general</h2>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='w-5/12 border-2 rounded-md shadow-lg text-center m-1 p-3'>
            <span className='text-4xl'>4</span>
            <p className='text-2xl'>Cursos publicados</p>
          </div>
          <div className='w-5/12 border-2 rounded-md shadow-lg text-center m-1 p-3'>
            <span className='text-4xl'>58</span>
            <p className='text-2xl'>Total de estudiantes</p>
          </div>
          <div className='w-5/12 border-2  m-1 text-center rounded-md shadow-lg p-3'>
            <span className='text-4xl'>S/.543</span>
            <p className='text-2xl'>Remuneracion total</p>
          </div>
        </div>
      </section>
      <section className='container mx-auto px-20'>
        <h1 className='text-2xl font-semibold ml-20'>Estadisticas de cursos</h1>
        <div className='p-2 w-3/4 h-96 overflow-hidden overflow-y-scroll mx-auto'>
          <div className='border-2 rounded shadow-lg flex p-3 w-full h-40'>
            <div className='w-3/5'>
              <div>
                <h1 className='text-2xl font-bold'>Nombre del curso</h1>
              </div>
              <div className='mt-5'>
                <p className='text-xl'>12 estudiantes </p>
              </div>
              <div>
                <div className='w-2/12 text-center'>
                <Rating value={4}/>
                </div>
              </div>
            </div>
            <div className='w-2/5 text-right'>
              <div>
                <span className='text-lg font-semibold'>Precio</span>
                <p className='text-3xl font-bold font-mono'>S/. 113</p>
              </div>
              <div>
                <span className='text-lg font-semibold'>Total</span>
                <p className='text-3xl font-bold font-mono'>S/. 600</p>
              </div>
            </div>
          </div>
          <div className='border-2 rounded shadow-lg flex p-3 w-full h-40'>
            <div className='w-3/5'>
              <div>
                <h1 className='text-2xl font-bold'>Nombre del curso</h1>
              </div>
              <div className='mt-5'>
                <p className='text-xl'>12 estudiantes </p>
              </div>
              <div>
                <div className='w-2/12 text-center'>
                <Rating value={4}/>
                </div>
              </div>
            </div>
            <div className='w-2/5 text-right'>
              <div>
                <span className='text-lg font-semibold'>Precio</span>
                <p className='text-3xl font-bold font-mono'>S/. 113</p>
              </div>
              <div>
                <span className='text-lg font-semibold'>Total</span>
                <p className='text-3xl font-bold font-mono'>S/. 600</p>
              </div>
            </div>
          </div>
          <div className='border-2 rounded shadow-lg flex p-3 w-full h-40'>
            <div className='w-3/5'>
              <div>
                <h1 className='text-2xl font-bold'>Nombre del curso</h1>
              </div>
              <div className='mt-5'>
                <p className='text-xl'>12 estudiantes </p>
              </div>
              <div>
                <div className='w-2/12 text-center'>
                <Rating value={4}/>
                </div>
              </div>
            </div>
            <div className='w-2/5 text-right'>
              <div>
                <span className='text-lg font-semibold'>Precio</span>
                <p className='text-3xl font-bold font-mono'>S/. 113</p>
              </div>
              <div>
                <span className='text-lg font-semibold'>Total</span>
                <p className='text-3xl font-bold font-mono'>S/. 600</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SidebarLayout>
  )
}

export default Teacher
