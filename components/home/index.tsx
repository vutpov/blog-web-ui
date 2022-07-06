import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from '../../models/reponse/category.response'
import CategoryService from '../../service/category.service'
import { TabPane, Tabs } from '../shared/Tab'
import { H5 } from '../shared/Text'
import LayoutButton, { LayoutValue } from './LayoutButton'
import ListPost from './ListPost'
import BlogCard from '../post/BlogCard'
import PostItem from '../post/BlogItem'

const category = new CategoryService()

const Container = styled.div`
  display: grid;
  row-gap: 33px;
  column-gap: 70px;
`

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '0',
      name: 'All',
      notes: '',
      posts: [],
    },
  ])

  const [categoryId, setCategoryId] = useState('0')

  useEffect(() => {
    const getData = async () => {
      let response = await category.getAll()

      setCategories([...categories, ...response.data])
    }

    getData()
  }, [])

  const [layout, setLayout] = useState<LayoutValue>('list')

  return (
    <>
      <Tabs
        defaultActiveKey="0"
        onChange={(key) => {
          setCategoryId(key)
        }}
        tabBarExtraContent={{
          right: (
            <LayoutButton
              onChange={(value) => {
                setLayout(value)
              }}
            />
          ),
        }}
      >
        {categories.map((category: Category) => {
          return (
            <TabPane
              key={category.id}
              tab={<H5>{category.name}</H5>}
              forceRender={true}
            />
          )
        })}
      </Tabs>

      <Container
        style={{
          gridTemplateColumns: layout === 'list' ? '1fr' : 'repeat(3, 1fr)',
        }}
      >
        <ListPost
          Component={layout === 'list' ? PostItem : BlogCard}
          categoryId={categoryId}
        />
      </Container>
    </>
  )
}

export default Home
