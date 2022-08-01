import BodyPadding from '@/components/layouts/BodyPadding'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import PostDetail from '@/components/post-detail'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import PostService from '@/service/post.service'
import { Post } from '@/models/reponse/post.response'
import Header from 'next/head'

const SeoMeta = (post: Post) => {
  const { title, description, id, attachment } = post

  const url = `${process.env.NEXT_PUBLIC_API_URL}/post/${id}`

  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={attachment} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={attachment} />
    </>
  )
}

const Page: NextPage<{
  post: Post
}> = (props) => {
  const { post } = props

  return (
    <>
      <Header>
        <SeoMeta {...post} />
      </Header>
      <DefaultLayout>
        <BodyPadding>
          <PostDetail {...post} />
        </BodyPadding>
      </DefaultLayout>
    </>
  )
}

const post = new PostService()

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let result: any
  try {
    const response = await post.getOne(query.id)
    result = response.data
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      post: result,
    },
  }
}

export default Page
