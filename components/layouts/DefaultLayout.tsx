import React from 'react'
import Footer from './Footer'
import Header from './Header'

const DefaultLayout: React.FC<{
  children: any
}> = (props) => {
  return (
    <>
      <Header />
      {props.children}

      <Footer />
    </>
  )
}

export default DefaultLayout
