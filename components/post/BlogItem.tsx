import React from 'react'
import styled from 'styled-components'
import { Post } from '../../models/reponse/post.response'
import { H4, H5 } from '../shared/Text'

interface PostItemProps extends Post {}

const Container = styled.div`
  padding: 20px 0 20px 40px;
  border-left: 5px solid ${({ theme }) => theme.primaryColor.main};
`

const StyledImage = styled.img``

const PostItem: React.FC<PostItemProps> = (props) => {
  const { attachment, description, id, title } = props

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

      <H5
        style={{
          marginTop: 23,
        }}
      >
        Written by
      </H5>
    </Container>
  )
}

export default PostItem
