import Sidebar from 'components/common/Sidebar'

export default function SidebarLayout ({ children }) {
  return (
    <>
      <div>
        <Sidebar/>
      </div>
      { children }
    </>
  )
}
