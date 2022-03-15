import { useContext, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/auth/AuthContext'
import { AuthRegister } from 'interfaces/auth.interface'
import { validations } from 'utils'
import Button from 'components/ui/Button'
import Link from 'components/ui/Link'

export default function RegisterView () {
  const { signInUser } = useContext(AuthContext)
  const [showError, setShowError] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm<AuthRegister>()

  const onSubmit = async (data: AuthRegister) => {
    const { email, password } = data
    const { hasError, message } = await signInUser(data)
    if (hasError) {
      setShowError(true)
      return
    }
    await signIn('credentials', { email, password })
  }

  return (
    <div className='w-full max-w-md'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='sm:shadow-md rounded px-8 py-20'>
        <div className='mb-4'>

          <input
            type='text'
            placeholder='Nombre completo'
            className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
            {...register('name', {
              required: 'Campo es requerido',
              minLength: { value: 3, message: 'Minimo 3 caracteres' }
            })}
          />
          <div>
            { errors.name ? (<span>{errors.name?.message}</span>) : ''}
          </div>
        </div>

        <div className='mb-4'>
          <input
            type='email'
            placeholder='Email'
            className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
            {...register('email', {
              required: 'Campo es requerido',
              validate: validations.isEmail
            })}
          />
          <div>
            { errors.email ? (<span>{errors.email?.message}</span>) : ''}
          </div>
        </div>

        <div className='mb-4'>
          <input
            type='password'
            placeholder='Password'
            className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
            {...register('password', {
              required: 'Campo requerido',
              minLength: { value: 6, message: 'Minimo 6 caracteres' }
            })}
          />
          <div>
            { errors.password ? (<span>{errors.password?.message}</span>) : ''}
          </div>
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
