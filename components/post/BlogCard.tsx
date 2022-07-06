import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Post } from '../../models/reponse/post.response'
import { H4, H5 } from '../shared/Text'

interface BlogCardProps extends Post {}

const Container = styled.div``

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const InfoContaienr = styled.div`
  padding: 22px 45px;
`

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { attachment, description, id, title, username, categoryName } = props

  const { grayColor } = useTheme()

  return (
    <Container>
      {attachment && <StyledImage src={attachment} />}

      <InfoContaienr>
        <H4
          style={{
            marginTop: 28,
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
        </div>
      </InfoContaienr>
    </Container>
  )
}

export default BlogCard
