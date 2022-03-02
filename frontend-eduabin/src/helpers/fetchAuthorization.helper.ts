import axios from 'axios'
import { fetchAuthorizationPROPS } from 'interfaces/helpers.interface'
import { NEXT_BK_URI } from 'services/servers.service'

export const fetchAuthorization = async ({ url, method, body }: fetchAuthorizationPROPS) => {
  try {
    const { data: { access } } = await axios.get(`${NEXT_BK_URI}/verify`)
    const headers = {
      'Authorization': `Token ${access}`,
      'Content-Type': 'multipart/form-data'
    }
    const { data, status } = await axios({ url, method, data: body, headers })
    return { data, status }
  } catch (err) {
    console.error(err)
    return err
  }
}
