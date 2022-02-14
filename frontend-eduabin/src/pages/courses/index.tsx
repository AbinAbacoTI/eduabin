import Layout from 'components/common/Layouts/Layout'
import Link from 'components/ui/Link'
import { getCoursesSector } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from '../../rdx/store/index'
import { Tab } from '@headlessui/react'
import { ISectorCourse } from '../../interfaces/course.interface'

const Courses = ({ coursesSector }: { coursesSector: ISectorCourse[] }) => {
  return (
    <Layout>
      <h1>Courses</h1>
      <div className='container mx-auto px-8 pt-24'>
        <div className='border-2 border-orange-600 rounded-lg p-3'>
          <div>
            <ul className='flex justify-between'>
              {
                coursesSector.map(sector => (
                  <Link href={`/courses/sector/${sector.sector_uuid}`}
                    key={sector.sector_uuid}
                    className='border-2 border-orange-500 bg-orange-500 text-white w-40 text-center rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-150'
                  >
                    {sector.sector_name}
                  </Link>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="w-full px-24 py-16 sm:px-0">
          <h1 className='text-xl font-sans'>Una amplia seleccion de cursos</h1>
          <Tab.Group>
            <Tab.List className='flex p-1 space-x-1 border-2 rounded-md bg-orange-200'>
              {
                coursesSector.map((sector: ISectorCourse) => (
                  <Tab
                    key={sector.sector_uuid}
                    className={({ selected }) => `w-full py-2.5 text-sm leading-5 font-medium ${selected ? 'bg-orange-600 text-white shadow' : 'text-orange-600 hover:bg-white/[0.12] hover:text-orange-600'}`
              }>
                      { sector.sector_name }
                  </Tab>
                ))
              }
            </Tab.List>
            <Tab.Panels>
              {
                coursesSector.map(sector => {
                  return (
                    <Tab.Panel
                      key={sector.sector_uuid}
                      className='border-2 p-2 flex justify-around'
                    >
                    {
                      sector.featured_courses.map(course => (
                        <Link href={`/courses/course/${course.course_uuid}`}
                          key={course.course_uuid}
                          className='border-2 p-2 shadow-md h-40 w-1/4'>
                          <div>
                            <h2 className='text-xl font-bold'>{ course.course_name }</h2>
                          </div>
                          <div>
                            <span>Profesor: { course.author.name }</span>
                          </div>
                          <div>
                            <span className='text-lg'>S/. { course.price }</span>
                          </div>
                        </Link>
                      ))
                    }
                    </Tab.Panel>
                  )
                })
              }
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = eduAbinWrapper.getServerSideProps(({ dispatch, getState }) => async () => {
  await dispatch(getCoursesSector())
  const { coursesSector } = getState().courseRdc
  return {
    props: {
      coursesSector
    }
  }
})
export default Courses
