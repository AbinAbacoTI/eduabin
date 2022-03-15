import { ISection } from 'interfaces/course.interface'
import { BK_URI } from 'services/servers.service'
import useSWR from 'swr'

export const useSections = () => {
  const { data, error } = useSWR<ISection[]>(`${BK_URI}/courses/section/list`)
  return {
    sections: data || [],
    isLoading: !data && !error,
    isError: error
  }
}
