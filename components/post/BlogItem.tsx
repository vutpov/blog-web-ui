import Link from 'next/link'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Post } from '../../models/reponse/post.response'
import { H4, H5 } from '../shared/Text'

interface PostItemProps extends Post {}

const Container = styled.div`
  padding: 20px 0 20px 40px;
  border-left: 5px solid ${({ theme }) => theme.primaryColor.main};
`

const StyledImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center;
`

const StyledLink = styled(H4)`
  &:hover {
    color: ${({ theme }) => theme.primaryColor.main};
    cursor: pointer;
  }
`

const PostItem: React.FC<React.PropsWithChildren<PostItemProps>> = (props) => {
  const { attachment, description, title, username, categoryName, id } = props

  const { grayColor } = useTheme()

  return (
    <Container>
      {attachment && <StyledImage src={attachment} />}

      <Link href={`/post/${id}`} passHref>
        <a>
          <StyledLink
            style={{
              marginTop: 28,
            }}
          >
            {title}
          </StyledLink>
        </a>
      </Link>

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

        {props.children}
      </div>
    </Container>
  )
}

export default PostItem
