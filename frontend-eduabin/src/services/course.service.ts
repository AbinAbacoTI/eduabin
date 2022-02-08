import axios from 'axios'
import { ICourses, ISectorCourse } from 'interfaces/course.interface'
import { BK_URI } from './servers.service'

const COURSE_URI = '/courses/'

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
    const { data } = await axios.get<ICourses>(`${BK_URI}${COURSE_URI}detail/${id}`)
    return data
  } catch (err) {
    console.error(`course.service: ${err}`)
  }
}

export const getCourseBySector = async () => {
  try {
    const { data } = await axios.get< ISectorCourse []>(`${BK_URI}${COURSE_URI}`)
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
