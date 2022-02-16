import Sidebar from 'components/common/Sidebar'

export default function SidebarLayout ({ children }) {
  return (
    <div className='flex'>
      <div className='w-1/5 h-screen'>
        <Sidebar/>
      </div>
      <div className='w-4/5 border-2 border-blue-500'>
      { children }
      </div>
    </div>
  )
}
