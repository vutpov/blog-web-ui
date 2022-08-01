import PostForm from '@/components/create-post/post-form'
import withAuthRedirect from '@/components/hoc/withAuthRedirect'
import BodyPadding from '@/components/layouts/BodyPadding'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { H4, H5 } from '@/components/shared/Text'
import FileService from '@/service/file.service'
import PostService from '@/service/post.service'
import React from 'react'
import { useTheme } from 'styled-components'

const post = new PostService()

const file = new FileService()

const Page = () => {
  const { grayColor } = useTheme()

  return (
    <DefaultLayout>
      <BodyPadding>
        <H4
          style={{
            fontStyle: 'italic',
          }}
        >
          Create Post
        </H4>

        <H5
          style={{
            marginBottom: 54,
            color: grayColor.l1,
          }}
        >
          Fill in your post infomation
        </H5>

        <PostForm
          onSubmit={async (data) => {
            let imageUrl = ''

            if (data.image?.originFileObj) {
              const formData = new FormData()

              formData.append('file', data.image.originFileObj)

              const res = await file.upload(formData)

              imageUrl = res.url
            }

            await post.create({
              categoryId: data.category,
              description: data.description,
              attachment: imageUrl,
              title: data.title,
            })
          }}
        />
      </BodyPadding>
    </DefaultLayout>
  )
}

export default withAuthRedirect(Page, {
  deniedUrl: '/',
})
