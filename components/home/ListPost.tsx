import React, { useEffect, useState } from 'react'
import { Post } from '../../models/reponse/post.response'
import PostService from '../../service/post.service'

interface ListPostProps {
  categoryId: any
  Component: React.JSXElementConstructor<any>
}

const post = new PostService()

const ListPost: React.FC<ListPostProps> = (props) => {
  const { categoryId, Component } = props

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const getData = async () => {
      let response = await post.getAll({
        categoryId,
      })

      setPosts([...response.data])
    }

    getData()
  }, [categoryId])

  return (
    <>
      {posts.map((post) => {
        return <Component {...post} key={post.id} />
      })}
    </>
  )
}

export default ListPost
