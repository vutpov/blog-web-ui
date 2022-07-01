import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from '../../models/reponse/category.response'
import CategoryService from '../../service/category.service'
import PostItem from '../post/BlogItem'
import { TabPane, Tabs } from '../shared/Tab'
import { H5 } from '../shared/Text'

const category = new CategoryService()

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '-1',
      name: 'All',
      notes: '',
      posts: [],
    },
  ])

  useEffect(() => {
    const getData = async () => {
      let response = await category.getAll()

      setCategories([...categories, ...response.data])
    }

    getData()
  }, [])

  return (
    <>
      <Tabs defaultActiveKey="-1">
        {categories.map((category: Category) => {
          return (
            <TabPane
              style={{
                display: 'grid',
              }}
              key={category.id}
              tab={<H5>{category.name}</H5>}
            >
              <div>
                hello
                {category.posts.map((post) => (
                  <PostItem {...post} key={post.id} />
                ))}
              </div>
            </TabPane>
          )
        })}
      </Tabs>
    </>
  )
}

export default Home
