import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import Puzzle from 'components/icons/Puzzle'
import TablerGrid from 'components/icons/TablerGrid'
import Link from 'components/ui/Link'

export default function Sidebar (params) {
  return (
        <div className="flex flex-no-wrap h-full">
            <div className="w-full absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
                <div className="px-8">
                <div className="image-text">
                <span className="image">
                    <img src="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/273035482_109862411613488_8272456011972948787_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH2s2pZ1gCV7yLnI9fnhjnua_sYSqso_Cxr-xhKqyj8LIHrxm5tonhu97b_V61lKPwLHRcankrs3tWf0TrwL7MA&_nc_ohc=lxXAjVmBzDwAX_Avj45&_nc_ht=scontent.faqp1-1.fna&oh=00_AT9Qz1_g0TcZpyu0qB2AQENghTX8O6GbG4YrbHdatCTAKw&oe=621186B6" alt=""/>
                </span>
                <div className="text-center mt-3">
                    <span className="text-white text-lg">Usuario</span>
                </div>
            </div>
                    <ul className="mt-12">
                        <Link href='/teacher'
                        className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border- border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <TablerGrid/>
                                <span className="text-sm  ml-2">Dashboard</span>
                            </div>
                        </Link>
                        <Link
                            href='/teacher/my-courses'
                         className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <Puzzle/>
                                <span className="text-sm  ml-2">Mis Cursos</span>
                            </div>
                        </Link>
                        <Link
                            href='/teacher/course/create'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Crear curso</span>
                            </div>
                        </Link>
                        <Link
                            href='/admin/create'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Crear - admin</span>
                            </div>
                        </Link>
                        <Link
                            href='/admin/courses'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Cursos - admin</span>
                            </div>
                        </Link>
                        <Link
                            href='/admin/payments'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Pagos - admin</span>
                            </div>
                        </Link>
                        <Link
                            href='/admin/users'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Usuarios - admin</span>
                            </div>
                        </Link>
                        <Link
                            href='/teacher/notifications'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="text-sm  ml-2">Notificaciones</span>
                            </div>
                        </Link>
                        <Link
                            href='/teacher/profile'
                            className="flex w-full justify-between text-gray-300 hover:text-gray-700 hover:bg-white cursor-pointer items-center mb-2 border-0 border-gray-300 py-2 px-2 rounded transition-all duration-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="text-sm  ml-2">Perfil</span>
                            </div>
                        </Link>
                    </ul>
                </div>
                <div className="px-8 border-t border-gray-700">
                    <ul className="w-full flex items-center justify-center bg-gray-800">
                        <li className="cursor-pointer text-white py-3 flex items-center hover:text-orange-600 transition-all duration-200">
                            <FontAwesomeIcon icon={faSignOutAlt} className='mr-3'/>
                            <span>Cerrar sesion</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Mobile Design */}
            <div className="w-64 z-40 absolute bg-gray-800 shadow h-full md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
                <div className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
                id="mobile-toggler">

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <div className="px-8">
                    <div className="h-16 w-full flex justify-center items-center">
                        <h1 className='font-semibold text-3xl text-orange-600'>EduAbin</h1>
                    </div>
                    <ul className="mt-12">
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                    <circle cx={12} cy={12} r={9} />
                                </svg>
                                <span className="text-sm  ml-2">Performance</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span className="text-sm  ml-2">Deliverables</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faCog}/>
                                <span className="text-sm  ml-2">Settings</span>
                            </div>
                            <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">25</div>
                        </li>
                    </ul>
                </div>
                <div className="px-8 border-t border-gray-700 absolute bottom-0 right-0 left-0">
                    <ul className="w-full flex items-center justify-center bg-gray-800">
                        <li className="cursor-pointer text-white py-3 flex items-center hover:text-orange-600 transition-all duration-200">
                            <FontAwesomeIcon icon={faSignOutAlt} className='mr-3'/>
                            <span>Cerrar sesion</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
