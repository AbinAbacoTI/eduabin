import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { checkUser } from '../../../helpers/checkUser'
import { NextAuthJwt, NextAuthSession } from '../../../interfaces'

export default NextAuth({
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@google.com'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password'
        }
      },
      async authorize (credentials) {
        return await checkUser(credentials.email, credentials.password)
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register'
  },
  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400
  },
  callbacks: {
    async jwt ({ token, account, user }: NextAuthJwt) {
      if (account) {
        token.accessToken = account.access_token
        switch (account.type) {
          case 'oauth':
            // check User or create User with social networks
            break
          case 'credentials':
            console.log('USER-CREDENTIALS: ', user)
            token.user = user
            break
        }
      }
      return token
    },
    async session ({ session, token, user }: NextAuthSession) {
      session.accessToken = token.accessToken
      session.user.token = token.user.token
      session.user.user = token.user.user
      return session
    }
  }
})
