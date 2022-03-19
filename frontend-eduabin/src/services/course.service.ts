import axios from 'axios'
import { ICourses, ISector } from 'interfaces/course.interface'
import { BK_URI } from './servers.service'
import { backendApi } from '../lib/fetchApi'

export const COURSE_URI = '/courses/'

export const getCoursesAll = async () => {
  try {
    const { data } = await axios.get<ICourses []>(`${BK_URI}${COURSE_URI}all`)
    return data
  } catch (err) {
    console.error(`course.service: ${err}`)
  }
}

export const getCourseById = async (id: string) => {
  try {
    const { data } = await backendApi.get<ICourses>(`${COURSE_URI}detail/course/${id}`)
    return data
  } catch (err) {
    console.error(`course.service: ${err}`)
  }
}

export const getSectionById = async (id: string) => {
  try {
    const { data } = await backendApi.get<ICourses>(`${COURSE_URI}detail/section/${id}`)
    return data
  } catch (err) {
    console.error(`course.service: ${err}`)
  }
}

export const getSectorById = async (id: string) => {
  try {
    const { data } = await backendApi.get<ICourses>(`${COURSE_URI}detail/sector/${id}`)
    return data
  } catch (err) {
    console.error(`course.service: ${err}`)
  }
}

export const getCourseBySector = async () => {
  try {
    const { data } = await axios.get< ISector []>(`${BK_URI}${COURSE_URI}`)
    return data
  } catch (err) {
    console.error(`course.service: ${err}`)
  }
}
export const getCourseSectorById = async (id:string) => {
  try {
    const { data } = await axios.get(`${BK_URI}${COURSE_URI}${id}`)
    return data
  } catch (err) {
    console.error(`course.service ${err}`)
  }
}
