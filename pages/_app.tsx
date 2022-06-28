import '../styles/App.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
