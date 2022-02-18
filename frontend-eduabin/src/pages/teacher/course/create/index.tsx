import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import CreateCourseView from 'components/teacher/CreateCourseView'

const Create = () => {
  return (
    <SidebarLayout>
      <div className='h-full border-2'>
        <CreateCourseView/>
      </div>
    </SidebarLayout>
  )
}

export default Create
