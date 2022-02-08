
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BK_URI } from '../../services/servers.service'
import { COURSE_URI } from '../../services/course.service'

export const courseApiSearch = createApi({
  reducerPath: 'courseApiSearch',
  baseQuery: fetchBaseQuery({ baseUrl: `${BK_URI}${COURSE_URI}` }),
  endpoints: (builder) => ({
    getCourseByName: builder.query({
      query: (name) => `search/${name}`
    })
  })
})

export const { useGetCourseByNameQuery } = courseApiSearch
