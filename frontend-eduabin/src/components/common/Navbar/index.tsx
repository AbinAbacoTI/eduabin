import { useContext, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'components/ui/Link'
import Bars from 'components/icons/Bars'
import Times from 'components/icons/Times'
import Search from 'components/icons/Search'
import { AuthContext } from '../../../context/auth/AuthContext'
import AvatarAuthMenu from '../AvatarAuthMenu'
import { Badge, IconButton } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { CartContext } from 'context'

const Navbar = () => {
  const [fixed, setFixed] = useState('')
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setFixed('bg-white text-black') : setFixed('text-white')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.addEventListener('scroll', listenScrollEvent)
    }
  }, [])

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext)
  const { cart } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className={`shadow-sm w-full bg-transparent border-b z-10 fixed  ${fixed}`}>
        <div className="w-full ">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Edu<span className="text-orange-500">Abin</span>
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  <div>
                    <div className="container  flex justify-center items-center px-4 mt-4 sm:px-6 lg:px-8">
                      <div className="relative"> <input type="text" className="h-10 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none border-2" placeholder="Busca el curso que quieras..." />
                        <div className="absolute top-4 right-3"> <i className="fa fa-search text-shadow-400 z-20 hover:text-shadow-500"></i> </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href='/'
                    to="inicio"
                    smooth="true"
                    offset={50}
                    duration={500}
                    className="cursor-pointer font-semibold px-3 py-2 text-md"
                  >
                    Inicio
                  </Link>
                  <Link
                    href='/courses'
                    to="cursos"
                    smooth="true"
                    offset={50}
                    duration={500}
                    className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Nuestros Cursos
                  </Link>
                  <Link
                    href='/eventos'
                    to="eventos"
                    smooth="true"
                    offset={50}
                    duration={5000}
                    className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Eventos
                  </Link>

                  <Link
                    href='/cart'
                    to="checkout"
                    smooth="true"
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-orange-600 font-semibold px-3 py-2 text-md hover:font-black"
                  >
                    <IconButton>
                      <Badge badgeContent={cart.length} color='primary'>
                          <ShoppingCartOutlined/>
                      </Badge>
                    </IconButton>
                  </Link>
                  {
                    !isLoggedIn &&
                      (
                    <Link
                      href="/auth/login"
                      to="checkout"
                      smooth="true"
                      offset={50}
                      duration={500}
                      className="cursor-pointer bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                    >
                      Inicar Sesion
                    </Link>
                      )
                  }
                  {
                    isLoggedIn && (<AvatarAuthMenu user={user} logOut={logOutUser}/>)
                  }
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-orange-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen
                  ? (
                    <Bars className='block h-6 w-6'/>
                    )
                  : (
                    <Times className='block h-6 w-6'/>
                    )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-100 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-100 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                      <input type="search" className="form-control relative flex-auto min-w-0 block w-70 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" placeholder="Busca el curso que desees..." aria-label="Search" aria-describedby="button-addon2" />
                      <button className="btn px-3 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <Search className='w-4'/>
                      </button>
                    </div>
                  </div>
                </div>
                <Link
                  href='/inicio'
                  to="inicio"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </Link>
                <Link
                  href='/cursos'
                  to="cursos"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Nuestros Cursos
                </Link>

                <Link
                  href='/eventos'
                  to="evento"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Eventos
                </Link>
                <Link
                  href='/bussines'
                  to="bussines"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Enseña en Adubin
                </Link>

                <div className="gap-4 grid-cols-2">
                  <Link
                    href='/auth/login'
                    to="login"
                    smooth="true"
                    offset={50}
                    duration={500}
                    className="mt-10 mb-8 bg-orange-500 shadow-lg shadow-indigo-500/50 border-solid border-2 border-sky-50 cursor-pointer hover:bg-black text-white hover:text-white block px-9 py-2 rounded-md  text-xl  tracking-tight text-center font-bold"
                  >
                    Inicia Sesion o Registrate
                  </Link>

                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
