import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'

import Footer from 'components/common/Footer'
import Navbar from 'components/common/Navbar'
interface Props {
  title: string;
  description: string;
}

export const Layout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
    <Head>
      <title>EduAbin | { title }</title>
      <meta name="description" content={description} />
    </Head>
    <Navbar/>
      <main>
        { children }
      </main>
    <Footer/>
    <ToastContainer/>
    </>
  )
}
