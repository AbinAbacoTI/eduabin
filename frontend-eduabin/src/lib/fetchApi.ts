import axios from 'axios'
import { BK_URI } from 'services/servers.service'
import { NEXT_BK_URI } from '../services/servers.service'

export const backendApi = axios.create({
  baseURL: BK_URI
})

export const frontendApi = axios.create({
  baseURL: NEXT_BK_URI
})
