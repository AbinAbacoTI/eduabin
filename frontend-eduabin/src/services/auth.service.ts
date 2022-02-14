import axios from 'axios'
import { AuthLogin, AuthRegister } from 'interfaces/auth.interface'
import { NEXT_BK_URI } from './servers.service'

export const getUser = async () => {
  try {
    const { data } = await axios.get(`${NEXT_BK_URI}/user`)
    return data.user
  } catch (err) {
    return null
  }
}

export const getCredential = async (credentials: AuthLogin
) => {
  try {
    const { status } = await axios.post(`${NEXT_BK_URI}/login`,
      credentials,
      { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
    return status === 200 ? { ok: true } : { ok: false }
  } catch (err) {
    console.error(err)
    throw new Error('Usuario o contraseña incorrecta')
  }
}

export const createUser = async (credentials: AuthRegister
) => {
  try {
    const { status } = await axios.post(`${NEXT_BK_URI}/signup`,
      credentials, {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      })
    return status === 200 ? { ok: true } : { ok: false }
  } catch (err) {
    console.error(err)
    throw new Error('No se pudo registrar sus credenciales')
  }
}

export const deleteUser = async () => {
  try {
    const res = await axios.post(`${NEXT_BK_URI}/logout`)
    return res.status === 204 ? { ok: true } : { ok: false }
  } catch (err) {
    console.error(err)
    throw new Error('Error delete user')
  }
}
