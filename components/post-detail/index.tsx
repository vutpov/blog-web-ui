import { Post } from '@/models/reponse/post.response'
import Link from 'next/link'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import BlogAction from '../post/BlogAction'
import { H4, H5 } from '../shared/Text'

const Container = styled.div``

const StyledImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center;
`

const ContentContainer = styled.div`
  padding: 0 34px;
`

interface PostDetailProps extends Post {}

const PostDetail: React.FC<PostDetailProps> = (props) => {
  const { attachment, description, title, username, categoryName, id } = props

  const { grayColor } = useTheme()

  return (
    <Container>
      {attachment && <StyledImage src={attachment} />}

      <ContentContainer>
        <H4
          style={{
            marginTop: 60,
          }}
        >
          {title}
        </H4>

        <H5
          style={{
            marginTop: 23,
          }}
        >
          {description}
        </H5>

        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 23,
          }}
        >
          <H5>Written by {username}</H5>

          <H5
            style={{
              color: grayColor.l1,
            }}
          >
            {categoryName}
          </H5>

          <BlogAction {...props} />
        </div>
      </ContentContainer>
    </Container>
  )
}

export default PostDetail
