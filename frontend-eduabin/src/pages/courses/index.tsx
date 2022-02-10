import Layout from 'components/common/Layouts/Layout'
import Link from 'components/ui/Link'
import { getCoursesSector } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from '../../rdx/store/index'

const Courses = ({ coursesSector }) => {
  return (
    <Layout>
      <h1>Courses</h1>
      <div className='container mx-auto px-8'>
        <div className='border-2 border-orange-600 rounded-lg p-3'>
          <div>
            <ul className='flex justify-between'>
              {
                coursesSector.map(sector => (
                  <Link href={`/courses/sector/${sector.sector_uuid}`}
                    key={sector.sector_uuid}
                    className='border-2 border-orange-500 bg-orange-500 text-white w-40 text-center rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-150'
                    >
                      { sector.sector_name}
                    </Link>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
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
