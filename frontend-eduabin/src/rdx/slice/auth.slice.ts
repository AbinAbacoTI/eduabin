import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Notify from 'components/ui/Notify'
import { AuthLogin, AuthRegister } from 'interfaces/auth.interface'
import { createUser, deleteUser, getCredential, getUser } from 'services/auth.service'

export const fetchUser = createAsyncThunk(
  'auth/me',
  async (_, thunkAPI) => {
    try {
      return await getUser()
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: AuthLogin, thunkAPI) => {
    try {
      const { ok } = await getCredential(credentials)
      if (ok) return await getUser()
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials: AuthRegister, thunkAPI
  ) => {
    try {
      const { ok } = await createUser(credentials)
      if (ok) {
        const { email, password } = credentials
        const { ok } = await getCredential({ email, password })
        if (ok) return await getUser()
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const data = await deleteUser()
      return data.ok
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export enum AuthState {
  IDLE = 'idle',
  LOADING = 'loading'
}

const initialState = {
  user: null,
  loading: AuthState.IDLE,
  error: false,
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, _action) => {
      state.loading = AuthState.LOADING
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = AuthState.IDLE
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = AuthState.IDLE
    })
    builder.addCase(login.pending, (state, _) => {
      state.loading = AuthState.LOADING
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = true
      state.errorMessage = action.payload
      state.loading = AuthState.IDLE
      Notify({
        message: action.payload as string,
        type: 'error',
        position: 'top-center'
      })
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = AuthState.IDLE
    })
    builder.addCase(registerUser.pending, (state, _) => {
      state.loading = AuthState.LOADING
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = true
      state.errorMessage = action.payload
      state.loading = AuthState.IDLE
      Notify({
        message: action.payload as string,
        type: 'error'
      })
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = AuthState.IDLE
    })
    builder.addCase(logout.pending, (state) => {
      state.loading = AuthState.LOADING
    })
    builder.addCase(logout.fulfilled, (_state) => initialState)
  }
})

export default authSlice.reducer
