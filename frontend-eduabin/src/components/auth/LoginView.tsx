import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { AuthLogin } from 'interfaces/auth.interface'
import { validations } from 'utils'
import Button from 'components/ui/Button'
import Link from 'components/ui/Link'

export default function LoginView () {
  const [showError, setShowError] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<AuthLogin>()

  const onSubmit = async (data: AuthLogin) => {
    const { email, password } = data

    await signIn('credentials', { email, password })
  }

  return (
      <div className='w-full max-w-md'>
        <form onSubmit={handleSubmit(onSubmit)}
          className='sm:shadow-md rounded px-8 py-20'>
          <div className='mb-4'>
            <input
              type='email'
              placeholder='Email'
              className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
              {...register('email', {
                required: 'Este campo es requerido',
                validate: validations.isEmail
              })}
            />
            <div>
            { errors.email ? (<span className='text-red-600'>{errors.email?.message}</span>) : <span></span>}
            </div>
          </div>

          <div className='mb-4'>
            <input
              type='password'
              placeholder='Password'
              className='bg-gray-200 appearance-none h-12 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
              {...register('password', {
                required: 'Este campo es requerido',
                minLength: { value: 6, message: 'Minimo 6 caracteres' }
              })}
            />
            <div>
            { errors.password ? (<span className='text-red-600'>{errors.password?.message}</span>) : <span></span>}
            </div>
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
          <div className='text-center mb-4 text-orange-600 font-semibold'>
            <Link href='#'>
                ¿Has olvidado la contraseña?
            </Link>
          </div>
        </form>
      </div>
  )
}
