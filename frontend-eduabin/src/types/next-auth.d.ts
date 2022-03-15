import NextAuth from 'next-auth'
import { IUser } from '../interfaces/auth.interface'

declare module 'next-auth' {
  interface Session {
    user: {
      token: string;
      user: IUser
    }
  }
}
