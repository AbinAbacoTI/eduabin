import Layout from 'components/common/Layouts/Layout'
import { getOneCourseSector } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from 'rdx/store'
import { DataCourse } from '../../../interfaces/course.interface'

const sector_uuid = ({ courseSector }) => {
  const { data, sector_name } = courseSector
  console.log(courseSector)
  return (
    <Layout>
      <h1 className='text-4xl font-mono font-bold'>{ sector_name }</h1>
      {
        data
          ? (
          <>
            {
              data.map((course:DataCourse) => (
                <>
                  <h1>{course.course_name}</h1>
                </>
              ))
            }
          </>
            )
          : null
      }
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
