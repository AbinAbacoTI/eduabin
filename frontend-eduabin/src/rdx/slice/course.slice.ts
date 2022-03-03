import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCourseById, getCourseBySector, getCoursesAll, getCourseSectorById } from 'services/course.service'

export const getCourses = createAsyncThunk(
  'course/getCourses',
  async (_, thunkAPI) => {
    try {
      return await getCoursesAll()
    } catch (err) {
      thunkAPI.rejectWithValue(err)
    }
  }
)

export const getOneCourse = createAsyncThunk(
  'course/getCourse',
  async (id: string, thunkAPI) => {
    try {
      return await getCourseById(id)
    } catch (err) {
      thunkAPI.rejectWithValue(err)
    }
  }
)
export const getCoursesSector = createAsyncThunk(
  'course/getCoursesSector',
  async (_, thunkAPI) => {
    try {
      return await getCourseBySector()
    } catch (err) {
      thunkAPI.rejectWithValue(err)
    }
  }
)

export const getOneCourseSector = createAsyncThunk(
  'course/getOneCourseSector',
  async (id: string, thunkAPI) => {
    try {
      return await getCourseSectorById(id)
    } catch (err) {
      thunkAPI.rejectWithValue(err)
    }
  }
)

export enum CourseState {
  IDLE = 'idle',
  LOADING = 'loading'
}

const initialState = {
  loading: CourseState.IDLE,
  courses: [],
  course: {},
  coursesSector: [],
  courseSector: {},
  error: null
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    reset: () => initialState,
    resetCourse: (state) => {
      state.course = {}
    }
  },
  extraReducers: builder => {
    builder.addCase(getCourses.pending, (state, _) => {
      state.loading = CourseState.LOADING
    })
    builder.addCase(getCourses.rejected, (state, action) => {
      state = { ...initialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(getCourses.fulfilled, (state, action) => {
      console.log(action.payload)
      state.courses = action.payload
      state.loading = CourseState.IDLE
    })
    builder.addCase(getOneCourse.pending, (state, _) => {
      state.loading = CourseState.LOADING
    })
    builder.addCase(getOneCourse.rejected, (state, action) => {
      state = { ...initialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(getOneCourse.fulfilled, (state, action) => {
      state.course = action.payload
      state.loading = CourseState.IDLE
    })
    builder.addCase(getCoursesSector.pending, (state, _) => {
      state.loading = CourseState.LOADING
    })
    builder.addCase(getCoursesSector.rejected, (state, action) => {
      state = { ...initialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(getCoursesSector.fulfilled, (state, action) => {
      state.coursesSector = action.payload
      state.loading = CourseState.IDLE
    })
    builder.addCase(getOneCourseSector.pending, (state, _) => {
      state.loading = CourseState.LOADING
    })
    builder.addCase(getOneCourseSector.rejected, (state, action) => {
      state = { ...initialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(getOneCourseSector.fulfilled, (state, action) => {
      state.courseSector = action.payload
      state.loading = CourseState.IDLE
    })
  }
})

export const { reset, resetCourse } = courseSlice.actions
