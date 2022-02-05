import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";


function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
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


								<div className=" bg-shadow">
    								<div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        								<div className="relative"> <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Busca el curso que quieras..."/>
          								  <div className="absolute top-4 right-3"> <i className="fa fa-search text-shadow-400 z-20 hover:text-shadow-500"></i> </div>
      							    	</div>
   								 	</div>
								</div>

                
									<Link
										activeClass="Home"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-orange-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Inicio
									</Link>
									<Link
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Nuestros Cursos
									</Link>
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Eventos
									</Link>

									<Link
										activeClass="Services"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Enseña en Adubin
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
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
								{!isOpen ? (
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
								) : (
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
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-blue px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/inicio"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Inicio
								</Link>
								<Link
									href="/cursos"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Nuestros Cursos
								</Link>

								<Link
									href="/eventos"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Eventos
								</Link>
								<Link
									href="/bussines"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Enseña en Adubin
								</Link>

								<Link
									href="/login"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="border-solid border-2 border-sky-50 cursor-pointer hover:bg-red-600 text-black hover:text-white block px-9 py-2 rounded-md text-base font-medium"
								>
									Inicia Sesion
								</Link>

								<Link
									href="/register"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="border-solid border-2 border-sky-50 cursor-pointer hover:bg-red-600 text-black hover:text-white block px-9 py-2 rounded-md text-base font-medium"
								>
									Eres Nuevo, Registrate.
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
