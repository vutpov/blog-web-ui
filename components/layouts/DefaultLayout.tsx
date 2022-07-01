import App from '../app'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const DefaultLayout: React.FC<{
  children: any
}> = (props) => {
  return (
    <App>
      <Header />
      {props.children}

      <Footer />
    </App>
  )
}

export default DefaultLayout
