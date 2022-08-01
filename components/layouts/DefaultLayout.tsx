import React from 'react'
import Footer from './Footer'
import Header from './Header'

const DefaultLayout: React.FC<{
  children: any
}> = (props) => {
  return (
    <>
      <Header
        style={{
          marginBottom: 80,
        }}
      />
      {props.children}

      <Footer
        style={{
          marginTop: 80,
        }}
      />
    </>
  )
}

export default DefaultLayout
