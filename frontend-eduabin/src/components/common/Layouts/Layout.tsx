import Footer from 'components/common/Footer'
import Navbar from 'components/common/Navbar'

export default function Layout ({ children }) {
  return (
    <>
    <Navbar/>
      <main className="p-5 py-36">
        { children }
      </main>
    <Footer/>
    </>
  )
}
