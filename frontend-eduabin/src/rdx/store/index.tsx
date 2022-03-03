import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { courseApiSearch } from 'rdx/services/course.service'
import { adminSlice } from 'rdx/slice/admin.slice'
import { authSlice } from 'rdx/slice/auth.slice'
import { courseSlice } from 'rdx/slice/course.slice'

const combinedReducer = combineReducers({
  courseRdc: courseSlice.reducer,
  authRdc: authSlice.reducer,
  adminRdc: adminSlice.reducer,
  [courseApiSearch.reducerPath]: courseApiSearch.reducer
})

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState
  }
  return combinedReducer(state, action)
}
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(courseApiSearch.middleware)
})
export const makeStore = () => store

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof combinedReducer>

export const eduAbinWrapper = createWrapper(makeStore, { debug: false })
