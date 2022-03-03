import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createCategory, getCategories } from 'services/admin.service'

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

export const getCategoriesAdmin = createAsyncThunk(
  'admin/getCategories',
  async (_, thunkAPI) => {
    try {
      return await getCategories()
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
  categories: [],
  error: null
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesAdmin.pending, (state) => {
      state.loading = ADMIN_STATE.LOADING
    })
    builder.addCase(getCategoriesAdmin.rejected, (state, action) => {
      throw new Error(action.payload as string)
    })
    builder.addCase(getCategoriesAdmin.fulfilled, (state, action) => {
      state.categories = action.payload
      state.loading = ADMIN_STATE.IDLE
    })
  }
})
