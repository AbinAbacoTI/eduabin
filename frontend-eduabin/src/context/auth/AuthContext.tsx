import { IUser } from 'interfaces'
import { createContext } from 'react'

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  signInUser: (credentials: {email: string, name:string, password:string}) => Promise<{ hasError: boolean, message?:string}>
  logOutUser: () => void
}

export const AuthContext = createContext({} as ContextProps)
