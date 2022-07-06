import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Post } from '../../models/reponse/post.response'
import { H4, H5 } from '../shared/Text'

interface PostItemProps extends Post {}

const Container = styled.div`
  padding: 20px 0 20px 40px;
  border-left: 5px solid ${({ theme }) => theme.primaryColor.main};
`

const StyledImage = styled.img``

const PostItem: React.FC<PostItemProps> = (props) => {
  const { attachment, description, id, title, username, categoryName } = props

  const { grayColor } = useTheme()

  return (
    <Container>
      {attachment && <StyledImage src={attachment} />}

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
    </Container>
  )
}

export default PostItem
