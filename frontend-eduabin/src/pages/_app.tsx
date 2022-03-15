import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { eduAbinWrapper, store } from 'rdx/store'
import 'react-toastify/dist/ReactToastify.css'
import { SWRConfig } from 'swr'
import { AuthProvider } from 'context'
import { SessionProvider } from 'next-auth/react'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <AuthProvider>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  )
}

export default eduAbinWrapper.withRedux(MyApp)
