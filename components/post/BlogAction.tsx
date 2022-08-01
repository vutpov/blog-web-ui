import { Post } from '@/models/reponse/post.response'
import PostService from '@/service/post.service'
import { getErrorMessage, showMessage } from '@/utils'
import { Popconfirm } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import useIsOwnPost from '../hooks/useIsOwnPost'
import { H5 } from '../shared/Text'

interface BlogActionProps extends Post {
  afterDelete?: () => void
}

const Container = styled.div`
  display: flex;
  gap: 8px;
`

const StyledText = styled(H5)`
  &:hover {
    color: ${({ theme }) => theme.primaryColor.main};
    cursor: pointer;
  }
`

const post = new PostService()

const BlogAction: React.FC<BlogActionProps> = (props) => {
  const { afterDelete } = props

  const isOwnPost = useIsOwnPost(props.username)
  const [loading, setLoading] = useState(false)

  return isOwnPost ? (
    <Container>
      <Link href={`/edit-post/${props.id}`} passHref>
        <a>
          <StyledText>Edit</StyledText>
        </a>
      </Link>

      <Popconfirm
        title="Are you sure to delete this post?"
        onConfirm={async () => {
          try {
            setLoading(true)
            await post.delete(props.id)
            afterDelete?.()
          } catch (e) {
            showMessage({
              content: getErrorMessage(e),
            })
          }
          setLoading(false)
        }}
        okButtonProps={{ loading }}
        okText="Yes"
        cancelText="No"
      >
        <StyledText>Delete</StyledText>
      </Popconfirm>
    </Container>
  ) : (
    <React.Fragment />
  )
}

export default BlogAction
