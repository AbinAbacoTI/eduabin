import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    },
    removeUser: () => initialState
  }
})

export const { addUser, removeUser } = authSlice.actions

export default authSlice.reducer
