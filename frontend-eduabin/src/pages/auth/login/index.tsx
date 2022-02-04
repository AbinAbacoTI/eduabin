import LoginView from 'components/auth/LoginView'
import Layout from 'components/common/Layouts/Layout'
import { GetServerSideProps } from 'next'
import cookie from 'cookie'

const Login = () => {
  return (
    <Layout>
      <div className='flex justify-center content-center items-center'>
        <LoginView/>
      </div>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie)
    console.log('Cookies login', cookies)
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

export default Login
