import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { Provider } from 'react-redux'
import { AuthProvider, CartProvider } from 'context'
import { store } from 'rdx/store'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <AuthProvider>
          <CartProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
          </CartProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  )
}

export default MyApp
