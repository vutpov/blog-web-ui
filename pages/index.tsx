import type { NextPage } from 'next'
import Home from '../components/home'
import BodyPadding from '../components/layouts/BodyPadding'
import DefaultLayout from '../components/layouts/DefaultLayout'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <BodyPadding>
        <Home />
      </BodyPadding>
    </DefaultLayout>
  )
}

export default Page
