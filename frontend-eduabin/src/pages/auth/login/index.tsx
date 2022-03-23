import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import LoginView from 'components/auth/LoginView'
import { Layout } from 'components/common/Layouts'

const Login = () => {
  return (
    <Layout title='Login' description='Login Page'>
      <div className='flex justify-center content-center items-center p-5 py-36'>
        <LoginView/>
      </div>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req })

  const { p = '/' } = query
  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default Login
