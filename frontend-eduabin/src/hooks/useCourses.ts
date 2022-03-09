import { BK_URI } from 'services/servers.service'
import useSWR, { SWRConfiguration } from 'swr'
import { ICourses } from '../interfaces/course.interface'

export const useCourses = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<ICourses[]>(`${BK_URI}${url}`, config)
  return {
    courses: data || [],
    isLoading: !data && !error,
    isError: error
  }
}
