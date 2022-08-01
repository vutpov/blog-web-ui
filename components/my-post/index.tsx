import PostService from '@/service/post.service'
import React, { useState } from 'react'
import styled from 'styled-components'
import LayoutButton, { LayoutValue } from '../home/LayoutButton'
import ListPost from '../home/ListPost'
import BlogCard from '../post/BlogCard'
import PostItem from '../post/BlogItem'

const post = new PostService()

const StyledLayoutButton = styled(LayoutButton)`
  width: fit-content;
  margin-left: auto;
`

const MyPost = () => {
  const [layout, setLayout] = useState<LayoutValue>('list')

  return (
    <>
      <StyledLayoutButton
        onChange={(value) => {
          setLayout(value)
        }}
      />

      <ListPost
        fetcher={post.myPost}
        style={{
          gridTemplateColumns: layout === 'list' ? '1fr' : 'repeat(3, 1fr)',
        }}
        Component={layout === 'list' ? PostItem : BlogCard}
      />
    </>
  )
}

export default MyPost
