
import RegisterView from 'components/auth/RegisterView'
import Layout from 'components/common/Layouts/Layout'
import React from 'react'

const Register = () => {
  return (
    <Layout>
      <div className='flex justify-center content-center items-center'>
        <RegisterView/>
      </div>
    </Layout>
  )
}

export default Register
