import Layout from 'components/common/Layouts/Layout'
import { getOneCourseSector } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from 'rdx/store'
import { ISectorCourseById } from '../../../interfaces/course.interface'

const sector_uuid = ({ courseSector }: {courseSector: ISectorCourseById}) => {
  const { data, sector_name } = courseSector
  return (
    <Layout>
      <div className='container mx-auto px-20 pt-20'>
        <h1 className='text-4xl font-mono font-bold'>Cursos de { sector_name }</h1>
          {
            data
              ? (
              <div className='border-2 border-blue-400 p-5'>
                {
                  data.map((course) => (
                    <div key={`sector-${course.course_uuid}-course`}
                      className='border-2'>
                      <h1 className='text-lg font-bold'>{course.course_name}</h1>
                      <div>
                        <p>{ course.description }</p>
                      </div>
                      <div>
                        <span>Profesor: { course.author.name }</span>
                      </div>
                      <div>
                        <span>{ course.student_no }</span>
                      </div>
                      <div>
                        <span>{ course.price }</span>
                      </div>
                    </div>
                  ))
                }
              </div>
                )
              : null
          }
      </div>
    </Layout>
  )
}

export const getServerSideProps = eduAbinWrapper.getServerSideProps(store => async ({ query }) => {
  const uuid = query.sector_uuid as string
  await store.dispatch(getOneCourseSector(uuid))
  const { courseSector } = store.getState().courseRdc
  return {
    props: {
      courseSector
    }
  }
})

export default sector_uuid
