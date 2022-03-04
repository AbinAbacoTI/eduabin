
import Avatar from 'components/common/Avatar'
import Comment from 'components/common/Comment'
import Layout from 'components/common/Layouts/Layout'
import CartShopping from 'components/icons/CartShopping'
import Heart from 'components/icons/Heart'
import Share from 'components/icons/Share'
import Collapse from 'components/ui/Collapse'
import Rating from 'components/ui/Rating'
import Image from 'next/image'
import { getOneCourse } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from 'rdx/store'

const course_uuid = ({ course }) => {
  return (
    <Layout>
      <div className='container mx-auto my-5 py-20 sm: md:px-3 lg:px-4  lg: xl: xl:px-40'>
        <div className=' flex flex-wrap justify-center'>
          <div className='mb-3 w-full sm:w-2/6 md: lg: xl:'>
            <div className='md:rounded-lg h-60 overflow-hidden'>
              <Image
                src={'/images/marketing-img.jpg'}
                width={200}
                height={200}
                objectFit='cover'
                layout='responsive'
                quality='85'
                alt={ 'Course Image'} />
            </div>
            <div className='px-5 py-2'>
              <div className='md:invisible md:absolute'>
                <h1 className='text-2xl font-bold my-1'>{/* {course.course_name} */}</h1>
                <p>{/* {course.description} */}</p>
                <div className='my-3 px-5 flex'>
                  <div className='flex justify-center'>
                    <div className='inline-block h-10 w-10 rounded-full border-2  bg-black border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear'>
                    </div>
                  </div>
                  <div className='py-2 mx-4'>
                    <h2>Nombre del profesor</h2>
                  </div>
                </div>
                <div className='flex flex-col items-center my-4'>
                  <div>
                    <span>1,000 Estudiantes</span>
                  </div>
                  <div className='flex'>
                    <div>
                      <span className='text-base font-bold'></span>
                    </div>
                    <Rating value={3.5} />
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <span className='text-3xl font-bold'>S/. {/* {course.price} */}</span>
              </div>
              <div className='p-3 flex flex-col items-center'>
                <button
                  className='my-2 border-2 border-orange-600 w-11/12 h-12 text-white font-bold text-base bg-orange-600'
                >Comprar ahora</button>
                <button
                  className='border-2 border-orange-600 w-11/12 h-12 text-orange-600 font-bold text-base bg-white'
                >Agregar al carrito</button>
              </div>

              <div className='border-2 px-3'>
                <div>
                  <h1 className='text-base font-bold'>Informacion del curso</h1>
                </div>
                <div>
                  <ul className='list-disc  px-5'>
                    <li>{/* { course.total_duration } */} horas de aprendizaje</li>
                    <li>{/* { course.total_modules } */} modulos</li>
                    <li>12 archivos descargables</li>
                    <li>Acceso por 6 meses</li>
                    <li>1 Assesoria gratiuta</li>
                    <li>Certificado de abin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-4/6 md: lg: xl:'>
            <div className='invisible absolute md:relative md:visible px-8 pt-3'>
              <div className='flex items-center content-center justify-between'>
                <div>
                  <h1 className='text-3xl font-bold my-1'>{/* {course.course_name} */} Nombre de curso</h1>
                </div>
                <div className='flex items-center w-44'>
                  <div className='mx-1'>
                    <span>Compartir</span>
                  </div>
                  <div className='w-20 h-6 flex flex-row justify-around'>
                    <Share color='orange'/>
                    <CartShopping color='orange'/>
                    <Heart color='orange'/>
                  </div>
                </div>
              </div>
              <p>{/* {course.description} */} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quo voluptatibus libero quaerat. Et consequuntur, quaerat, similique nulla ab explicabo esse, odit dolore quia cupiditate ex soluta eaque! Dignissimos, tenetur?</p>
              <div className='border-2 flex flex-row justify-around content-center items-center my-5'>
                <div className='my-3 px-5 flex'>
                  <div className='flex justify-center'>
                    <div className='inline-block h-10 w-10 rounded-full border-2 border-primary overflow-hidden'>
                      <Avatar
                        w={12}
                        h={12}
                      />
                    </div>
                  </div>
                  <div className='py-2 mx-4'>
                    <h2>{/* { course.author.name } */} Profesor name</h2>
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                    <Rating value={3} />
                    <div>
                      <span className='font-semibold'>{/* { course.student_no} */} 23 Estudiantes</span>
                    </div>
                </div>
                <div>
                    <span>
                      Actualizado el {/* { course.last_update } */}
                    </span>
                </div>
              </div>
            </div>
            <div className='px-8'>
              <div>
                <h1 className='text-base font-bold'>Que aprenderas</h1>
              </div>
              <div>
                <h1 className='text-base font-bold'>Obejetivos del curso</h1>
              </div>
              <div>
                <h1 className='text-base font-bold'>Temario</h1>
                <div>
                  <Collapse title='Titulo de modulo'>
                    Contenido de collapse para los curssos
                  </Collapse>
                </div>
              </div>
            </div>
            <div className='px-8 flex'>
              <div>
                <Avatar
                    w={12}
                    h={12}
                    />
              </div>
              <div className='w-full flex items-center'>
                <Comment/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

/* export const getServerSideProps = eduAbinWrapper.getServerSideProps(({ dispatch, getState }) => async ({ query }) => {
  const uuid = query.course_uuid as string
  await dispatch(getOneCourse(uuid))
  const course = getState().courseRdc.course
  return {
    props: {
      course
    }
  }
}) */

export default course_uuid
