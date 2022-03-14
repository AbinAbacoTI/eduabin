import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { checkUser } from '../../../helpers/checkUser'

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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
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
    async jwt ({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
        switch (account.type) {
          case 'oauth':
            // check User or create User
            break
          case 'credentials':
            token.user = user
            break
        }
      }
      return token
    },
    async session ({ session, token, user }) {
      session.accessToken = token.accessToken
      session.user = token.user
      return session
    }
  }
})
