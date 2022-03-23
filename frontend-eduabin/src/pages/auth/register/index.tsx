import RegisterView from 'components/auth/RegisterView'
import { Layout } from 'components/common/Layouts'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

const Register = () => {
  return (
    <Layout title='Register' description='Register page'>
      <div className='flex justify-center content-center items-center p-5 py-36'>
        <RegisterView/>
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

export default Register
