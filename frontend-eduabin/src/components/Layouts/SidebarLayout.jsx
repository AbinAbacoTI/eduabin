import Sidebar from "components/Sidebar";

export default function SidebarLayout({ children }) {
  return (
    <>
      <div>
        <Sidebar/>
      </div>
      { children }
    </>
  )
}