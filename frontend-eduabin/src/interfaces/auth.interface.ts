import { Account, Session } from 'next-auth/core/types'

export interface AuthRegister {
  name: string
  email: string
  password: string
}

export interface AuthLogin {
  email: string
  password: string
}

export interface IUser {
  name: string;
  user_type: string | number;
  id: number;
  email: string;
  remuneration: [];
  paid_courses: []
}

export interface NextAuthJwt{
  token: {
    user: {
      user: IUser
    },
    accessToken: string
  },
  account: Account,
  user: any
}

export interface NextAuthSession {
  session: Session,
  token: {
    user: {
      user: IUser,
      token: string
    },
    accessToken: string
  },
  user: any
}
