import { IUser } from 'interfaces'
import { createContext } from 'react'

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  loginUser: (email:string, password: string) => Promise<boolean>;
  signInUser: (credentials: {email: string, name:string, password:string}) => Promise<{ hasError: boolean, message?:string}>
}

export const AuthContext = createContext({} as ContextProps)
