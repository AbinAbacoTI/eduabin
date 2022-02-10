import RegisterView from 'components/auth/RegisterView'
import Layout from 'components/common/Layouts/Layout'
import { GetServerSideProps } from 'next'
import cookie from 'cookie'

const Register = () => {
  return (
    <Layout>
      <div className='flex justify-center content-center items-center p-5 py-36'>
        <RegisterView/>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie)
    if (cookies && cookies.refresh_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }

  return {
    props: {}
  }
}

export default Register
