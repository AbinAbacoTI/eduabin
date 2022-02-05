import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from 'rdx/slice/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice
  }
})
