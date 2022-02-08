import { useRouter } from 'next/router'
import { addUser, removeUser } from 'rdx/slice/auth.slice'
import { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NEXT_BK_URI } from 'services/servers.service'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const user = useSelector(state => state.authRdc.user)
  const [authError, setAuthError] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  const dispatch = useDispatch()
  const { push } = useRouter()

  useEffect(() => checkUserLoggedIn(), [])

  const login = async ({ email, password }) => {
    console.log('AuthContext-Login', email, password)
    const res = await fetch(`${NEXT_BK_URI}/login`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()
    if (res.ok) {
      await checkUserLoggedIn()
      push('/')
    } else {
      setAuthError(data.detail)
    }
  }

  const signup = async ({ email, password, name }) => {
    console.log('sigup:37', email, password, name)
    const res = await fetch(`${NEXT_BK_URI}/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })

    const data = await res.json()
    console.log(data)
    if (res.ok) {
      await login({ email, password })
    } else {
      if (data.name) {
        setAuthError(data.name[0])
      } else if (data.email) {
        setAuthError(data.email[0])
      } else {
        setAuthError(data.password.join('\n'))
      }
    }
  }

  const logout = async () => {
    console.log('entro al log out')
    const res = await fetch(`${NEXT_BK_URI}/logout`, { method: 'POST' })

    console.log('authcontext:62', res.ok)
    if (res.ok) dispatch(removeUser())
    console.log('remove user--')
  }

  const checkUserLoggedIn = async () => {
    console.log('checkUserLogged')

    const res = await fetch(`${NEXT_BK_URI}/user`)

    if (res.ok) {
      const data = await res.json()
      console.log('auth:70', data)
      dispatch(addUser(data.user))
    } else {
      dispatch(addUser(null))
      console.log('add user:null')
    }
    setAuthReady(true)
  }

  const clearUser = () => dispatch(removeUser())

  return (
    <AuthContext.Provider value={{ user, authError, login, signup, logout, clearUser }}>
      { authReady && children }
    </AuthContext.Provider>
  )
}

export default AuthContext
