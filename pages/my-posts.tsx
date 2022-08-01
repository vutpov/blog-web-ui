import withAuthRedirect from '@/components/hoc/withAuthRedirect'
import BodyPadding from '@/components/layouts/BodyPadding'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import MyPost from '@/components/my-post'
import React from 'react'

const Page = () => {
  return (
    <DefaultLayout>
      <BodyPadding>
        <MyPost />
      </BodyPadding>
    </DefaultLayout>
  )
}

export default withAuthRedirect(Page, {
  deniedUrl: '/',
})
