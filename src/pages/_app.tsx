import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/useCart'

import { defaultTheme } from '../styles/themes/default'

import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  ) 
}

export default MyApp
