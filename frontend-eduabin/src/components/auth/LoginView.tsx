import Button from 'components/ui/Button'
import Link from 'components/ui/Link'
import { AuthLogin } from 'interfaces/auth.interface'
import { useRouter } from 'next/router'
import { signIn, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { validations } from 'utils'

export default function LoginView () {
  const [showError, setShowError] = useState(false)
  const [providers, setProviders] = useState<any>({})
  useEffect(() => {
    getProviders().then(prov => {
      setProviders(prov)
    })
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm<AuthLogin>()
  const router = useRouter()

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
          <div className='flex flex-col pt-2 border-t-2'>
              {
                Object.values(providers).map((provider:any) => {
                  if (provider.id === 'credentials') return (<div key='credentials'></div>)
                  return (
                    <button
                      key={provider.id}
                      onClick={() => signIn(provider.id)}
                      className="border-2 border-gray-500 rounded-xl h-10 m-1"
                    >
                      { provider.name }
                    </button>
                  )
                })
              }
          </div>
        </form>
      </div>
  )
}
