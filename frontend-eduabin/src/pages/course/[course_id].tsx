
import { GetServerSideProps, NextPage } from 'next'
import { useContext, useState } from 'react'
import Image from 'next/image'
import { PersonOutline } from '@mui/icons-material'
import { Avatar, Button, Rating, Typography } from '@mui/material'
import Comment from 'components/common/Comment'
import { Layout } from 'components/common/Layouts'
import { getCourseById } from '../../services/course.service'
import { ICourseDetail } from '../../interfaces'
import Collapse from 'components/ui/Collapse'
import { ICartCourse } from '../../interfaces/cart.interface'
import { CartContext } from 'context'
import { useRouter } from 'next/router'

interface Course_Props {
  course: ICourseDetail
}

const course_uuid: NextPage<Course_Props> = ({ course }) => {
  const { cart, addCourseToCart } = useContext(CartContext)
  const courseExistInCart = cart.some(courseInCart => courseInCart === course)
  const { push } = useRouter()
  const [tempCartCourse, setTempCartCourse] = useState<ICartCourse>({
    ...course
  })
  const onAddCourse = () => {
    addCourseToCart(tempCartCourse)
    /* push('/cart') */
  }

  return (
    <Layout title='Course' description='Course detail description'>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>{course.course_name}</p>
            <span>Home / Courses</span>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-10 py-10'>
        <div className='grid grid-cols-4 gap-1'>
          <div className='col-span-3'>
            <div className='flex justify-between'>
              <div className='flex items-center justify-around w-2/5 border-2'>
                <Avatar>H</Avatar>
                <div>
                  <Typography textTransform='uppercase'>{course.author.name}</Typography>
                </div>
                <div>
                  <Typography>{course.last_update}</Typography>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-4xl'>{course.course_name}</h1>
            </div>
            <div className='w-1/3 flex justify-around'>
              <div>
                <Rating value={course.valoration} />
              </div>
              <div>
                <PersonOutline fontSize='small' />
              </div>
            </div>
            <div>
              <div className='border shadow-md p-5 mt-4'>
                {course.description}
              </div>
            </div>

            <div className='border shadow-md p-5 mt-4'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque tempora magni iste enim doloribus placeat eos sint eius asperiores! Laboriosam, dolorum error.
                Atque obcaecati ullam autem voluptatibus dolores quasi architecto!</p>
            </div>

            <div className='border shadow-md p-5 mt-4'>
              {
                course.modules.map(({ id, module_name, topics }) => (
                  <Collapse
                    key={`course-module-${id}`}
                    title={module_name}
                  >
                    <div>
                      {
                        !!topics.length &&
                        (
                          <>
                            {
                              topics.map(({ id, topic_name, sub_topics }) => (
                                <Collapse
                                  key={`course-module-topic-${id}`}
                                  title={topic_name}
                                >
                                  <div>
                                    {
                                      !!sub_topics?.length && (
                                        <>
                                          {
                                            sub_topics.map(subTopic => (
                                              <div
                                                key={`module-$topic-subtopic-${subTopic}`}
                                              >
                                                <span>{subTopic}</span>
                                              </div>
                                            ))
                                          }
                                        </>
                                      )
                                    }
                                    {
                                      !sub_topics.length && (<span>No contiene sub temas</span>)
                                    }
                                  </div>
                                </Collapse>
                              ))
                            }
                          </>
                        )
                      }
                      {
                        !topics.length && (<span>Notiene temas</span>)
                      }
                    </div>
                  </Collapse>
                ))
              }
            </div>

            <div className='border shadow-md p-5'>
              <div>
                Instructor
              </div>
              <div className='flex'>
                <div className='w-1/4'>
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                  >H</Avatar>
                </div>
                <div className='w-3/4'>
                  <div>
                    <span>details</span>
                  </div>
                  <div>
                    <h2>{course.author.name}</h2>
                  </div>
                  <div>
                    <p>Hello! I am a Seattle/Tacoma, Washington area graphic designer with over
                      6 years of graphic design experience. I specialize in designing infographics,
                      icons, brochures, and flyers. Included in my estimate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='border shadow-md p-5'>
              <span>Comentarios</span>
              <div>
                <div className='border-black border-b w-4/5 flex justify-evenly px-10'>
                  <div className='border'>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                    >H</Avatar>
                  </div>
                  <div className='border'>
                    <h2 className='text-lg'>nombre de usuario</h2>
                    <div>
                      <span className='text-sm'>fecha de comentario</span>
                    </div>
                    <div className='my-4'>
                      <p>Contenido  -  Comentarios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='border-2 rounded p-8'>
              <div className='border-2 flex justify-center'>
                <button
                  onClick={courseExistInCart ? null : () => onAddCourse()}
                  className="w-52 h-11 bg-orange-eduabin text-white border-2 border-orange-eduabin hover:bg-transparent hover:text-orange-eduabin transition-all duration-100"
                >
                  {
                    courseExistInCart ? (<span>Ir al carrito</span>) : (<span>Agregar al carrito</span>)
                  }
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { course_id = '' } = params as { course_id: string }
  const course = await getCourseById(course_id)
  return {
    props: {
      course
    }
  }
}

export default course_uuid
