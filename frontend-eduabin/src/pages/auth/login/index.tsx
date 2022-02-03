import LoginView from 'components/auth/LoginView'
import Layout from 'components/common/Layouts/Layout'

const Login = () => {
  return (
    <Layout>
      <div className='flex justify-center content-center items-center'>
        <LoginView/>
      </div>
    </Layout>
  )
}

export default Login
