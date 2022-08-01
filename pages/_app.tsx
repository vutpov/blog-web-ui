import 'antd/dist/antd.less'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from '@/components/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
