import React from 'react'
import Register from '@/components/register'
import withAuthRedirect from '@/components/hoc/withAuthRedirect'

const Page = () => {
  return <Register />
}

export default withAuthRedirect(Page, {
  authorizedUrl: '/',
})
