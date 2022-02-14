import Button from 'components/ui/Button'
import Link from 'components/ui/Link'
import { AuthRegister } from 'interfaces/auth.interface'
import { useRouter } from 'next/router'
import { registerUser } from 'rdx/slice/auth.slice'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/rdx.hooks'

export default function RegisterView () {
  const { handleSubmit, register } = useForm()
  const dispatch = useDispatch()
  const router = useRouter()
  const { user, loading } = useAppSelector(state => state.authRdc)

  const onSubmit = (data: AuthRegister) => {
    dispatch(registerUser(data))
  }

  useEffect(() => { if (user) router.push('/') }, [loading])

  return (
    <div className='w-full max-w-md'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='sm:shadow-md rounded px-8 py-20'>
        <div className='mb-4'>

          <input
            type='text'
            placeholder='Nombre completo'
            className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
            {...register('name')}
          />
        </div>

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
            text='Registrate'
          />
        </div>
        <div className='text-center mb-4'>
          <span>
            ¿Ya tienes una cuenta?
            <Link href='/auth/login' className='ml-2 text-orange-600 font-semibold'>
                Iniciar sesion
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}
