import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createCategory } from 'services/admin.service'

export const addCategory = createAsyncThunk(
  'admin/createCategory',
  async (data: { name: string, category_image: File}, thunkAPI) => {
    try {
      const { ok } = await createCategory(data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export enum ADMIN_STATE {
 IDLE = 'idle',
 LOADING = 'loading'
}

export const initialState = {
  loading: ADMIN_STATE.IDLE,
  data: [],
  error: null
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {}
})
