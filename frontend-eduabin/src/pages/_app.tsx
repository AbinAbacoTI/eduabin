import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { eduAbinWrapper, store } from 'rdx/store'
import { AuthContextProvider } from 'context/AuthContext'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Provider>
  )
}

export default eduAbinWrapper.withRedux(MyApp)
