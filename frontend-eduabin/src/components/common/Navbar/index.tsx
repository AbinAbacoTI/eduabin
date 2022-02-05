import Link from 'components/ui/Link'
import AuthContext from 'context/AuthContext'
import { useContext } from 'react'

export default function Navbar () {
  const { user, logout } = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <h1 className="text-2xl text-orange-600 font-bold">Navbar</h1>
      <p>User: {user === null ? 'No hay usuario' : user.name } </p>
      <div className='flex  justify-between'>
        {
          user
            ? (<>
            <button onClick={logout}>
              Log Out
            </button>
          </>)
            : (<>
            <Link href='/auth/login'>
              Login
            </Link>
            <Link href='/auth/register'>
              Register
            </Link>
            </>)
        }
      </div>
      <hr />
    </>
  )
}
