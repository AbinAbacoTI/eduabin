/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'components/ui/Link'

function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  return (
		<div>
			<nav className=" shadow-sm fixed w-full z-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									Edu<span className="text-orange-500">Abin</span>
								</h1>
							</div>

							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">

								<div className=" bg-white">
    								<div className="container  flex justify-center items-center px-4 sm:px-6 lg:px-8">
        								<div className="relative"> <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Busca el curso que quieras..."/>
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
										className="cursor-pointer text-orange-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Inicio
									</Link>
									<Link
										href='/cursos'
										to="cursos"
										smooth="true"
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Nuestros Cursos
									</Link>
									<Link
										href='/eventos'
										to="eventos"
										smooth="true"
										offset={50}
										duration={5000}
										className="cursor-pointer hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Eventos
									</Link>

									<Link
										href='/bussiness'
										to="bussiness"
										smooth="true"
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Enseña en Adubin
									</Link>

									<Link
										href='/checkout'
										to="checkout"
										smooth="true"
										offset={50}
										duration={500}
										className="cursor-pointer text-orange-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Mi Cesta
										<svg className="h-4 w-7 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            								<path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          								</svg>
									</Link>

									<Link
										href="/auth/login"
										to="checkout"
										smooth="true"
										offset={50}
										duration={500}
										className="cursor-pointer bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
										Iniciar Sesion
									</Link>

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
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								    )
								  : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
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
      <input type="search" className="form-control relative flex-auto min-w-0 block w-70 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" placeholder="Busca el curso que desees..." aria-label="Search" aria-describedby="button-addon2"/>
      <button className="btn inline-block px-3 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#ffffff " d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
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
									className="mt-10 mb-8 rounded-lg bg-orange-500 shadow-lg shadow-indigo-500/50 border-solid border-2 border-sky-50 cursor-pointer hover:bg-black text-white hover:text-white block px-9 py-2 rounded-md  text-xl  tracking-tight text-center font-bold"
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
