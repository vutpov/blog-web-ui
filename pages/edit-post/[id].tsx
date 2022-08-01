import PostForm from '@/components/create-post/post-form'
import withAuthRedirect from '@/components/hoc/withAuthRedirect'
import useIsOwnPost from '@/components/hooks/useIsOwnPost'
import BodyPadding from '@/components/layouts/BodyPadding'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { H4, H5 } from '@/components/shared/Text'
import { Post } from '@/models/reponse/post.response'
import FileService from '@/service/file.service'
import PostService from '@/service/post.service'
import { getErrorMessage, showMessage } from '@/utils'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const post = new PostService()

const file = new FileService()

const Page = () => {
  const { grayColor } = useTheme()

  const [postData, setPostData] = useState<Post>()

  const router = useRouter()

  const postId = router.query.id

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await post.getOne(postId)
        setPostData(response.data)
      } catch (e) {
        console.error(e)
        showMessage({
          content: getErrorMessage(e),
        })
      }
    }

    getData()
  }, [])

  const isOwnPost = useIsOwnPost(postData?.username)

  let children = <div>loading...</div>

  if (isOwnPost === false) {
    children = <div>This is not your post.</div>
  } else if (isOwnPost) {
    children = (
      <>
        <H4
          style={{
            fontStyle: 'italic',
          }}
        >
          Edit Post
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
          defaultValues={{
            description: postData!!.description,
            image: postData!!.attachment,
            title: postData!!.title,
            category: postData!!.categoryId,
          }}
          submitText={'Update'}
          onSubmit={async (data) => {
            let imageUrl = ''

            if (data.image?.originFileObj) {
              const formData = new FormData()

              formData.append('file', data.image.originFileObj)

              const res = await file.upload(formData)

              imageUrl = res.url
            }

            let dataToSubmit: any = {
              categoryId: data.category,
              description: data.description,

              title: data.title,
            }

            if (imageUrl) {
              dataToSubmit.attachment = imageUrl
            }

            await post.update({
              id: postId,
              ...dataToSubmit,
            })
          }}
        />
      </>
    )
  }

  return (
    <DefaultLayout>
      <BodyPadding>{children}</BodyPadding>
    </DefaultLayout>
  )
}

export default withAuthRedirect(Page, {
  deniedUrl: '/',
})
