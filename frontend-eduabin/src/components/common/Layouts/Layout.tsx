import Footer from 'components/common/Footer'
import Navbar from 'components/common/Navbar'
import { ToastContainer } from 'react-toastify'

export default function Layout ({ children }) {
  return (
    <>
    <Navbar/>
      <main>
        { children }
      </main>
    <Footer/>
    <ToastContainer/>
    </>
  )
}
