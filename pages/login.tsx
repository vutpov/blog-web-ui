import React from 'react'
import Login from '@/components/login'
import withAuthRedirect from '@/components/hoc/withAuthRedirect'

const Page = () => {
  return <Login />
}

export default withAuthRedirect(Page, {
  authorizedUrl: '/',
})

// This gets called on every request
export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: {} }
}
