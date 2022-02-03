import Button from 'components/ui/Button'
import Link from 'components/ui/Link'
import { useForm } from 'react-hook-form'

const LoginView = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div className='w-full max-w-md'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='sm:shadow-md rounded px-8 py-20'>
        <div className='mb-4'>
          <input
            type='email'
            placeholder='Email'
            className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
            {...register('email')}
          />
        </div>

        <div className='mb-4'>
          <input
            type='password'
            placeholder='Password'
            className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
            {...register('password')}
          />
        </div>

        <div className='mb-4'>
          <Button
            className='text-white w-full h-12 font-semibold rounded bg-orange-500 hover:bg-orange-400 transition-all ease-out duration-200'
            text='Iniciar Sesion'
          />
        </div>
        <div className='text-center mb-4'>
          <span>
            ¿No tienes una cuenta?
            <Link href='/auth/register' className='ml-2 text-orange-600 font-semibold'>
                Regístrate
            </Link>
          </span>
        </div>
        <div className='text-center text-orange-600 font-semibold'>
          <Link href='#'>
              ¿Has olvidado la contraseña?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginView
