import Sidebar from 'components/common/Sidebar'

export default function SidebarLayout ({ children }) {
  return (
    <div className='flex'>
      <div className='w-1/6 h-screen'>
        <Sidebar />
      </div>
      <div className='w-5/6 max-h-screen'>
        <div className='h-full overflow-hidden overflow-y-scroll'>
          {children}
        </div>
      </div>
    </div>
  )
}
