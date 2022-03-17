import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Link from 'components/ui/Link'

const profile = () => {
  return (
        <SidebarLayout><br></br><section className='container mx-auto px-20 mb-5'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-5/12 border-2 rounded-md shadow-lg text-center m-1 p-3'>
                    <p className='text-4xl'>Configura tu Información</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="flex items-center justify-around h-full border-2 ">
                <Link href='/teacher/profile/config-info'
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                    Información Básica del Perfil
                </Link>
                <button
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                    Información de la Cuenta
                </button>
                <Link href='/teacher/profile/payment-method'
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                    Método de Cobro
                </Link>
                <Link href='/teacher/profile/other-config'
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                    Otras configuraciones
                </Link>
            </div>
        </section><br></br><br></br><br></br><div className="border-2 border-black-400 flex items-center content-center">
                <form className="w-11/12 m-auto bg-gray-100 py-10 px-1">
                    <div className='flex flex-wrap justify-around items-center '>
                        <div className='w-5/12'>
                            <p className='text-3xl'>Información Básica del Perfil</p>
                            <br></br>
                            <div className='p-1'>
                                <input type="text"
                                    className='border-2 w-full h-10 px-3'
                                    placeholder='Nombres' />
                            </div>
                            <div className='p-1'>
                                <input type="text"
                                    className='border-2 w-full h-10 px-3'
                                    placeholder='Apellidos' />
                            </div>
                            <div className='p-1'>
                                <input type="text"
                                    className='border-2 w-full h-10 px-3'
                                    placeholder='Número de Contacto' />
                            </div>
                        </div>
                        <div className='w-5/12'>
                            <div className='p-1 text-2xl'>
                                <label>
                                    Foto de Perfil
                                </label>
                            </div>
                            <div className='p-1'>
                                <input type="file"
                                    className='border-2 w-full px-3' />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='text-center'>
                        <button
                            className='bg-orange-700 text-white py-3 px-8 text-lg font-bold rounded-md m-1 hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all duration-150'
                        >Guardar cambios </button>
                    </div>
                </form>
            </div></SidebarLayout>
  )
}
export default profile
