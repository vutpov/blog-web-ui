import { PaginationRequest } from '@/models'
import { PaginationReponseData } from '@/models/reponse/index.response'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Post } from '../../models/reponse/post.response'
import PostService from '../../service/post.service'
import StyledPagination from '../shared/Pagination'
import { useDebounceEffect } from 'ahooks'
import BlogCard from '../post/BlogCard'
import BlogItem from '../post/BlogItem'
import BlogAction from '../post/BlogAction'

type ComponentType = typeof BlogCard | typeof BlogItem

interface ListPostProps {
  categoryId?: any
  Component: ComponentType
  style?: React.CSSProperties
  fetcher?: (
    reqParam: PaginationRequest,
  ) => Promise<PaginationReponseData<Post[]>>
}

const post = new PostService()

const Container = styled.div`
  display: grid;
  row-gap: 33px;
  column-gap: 70px;
`

const PaginationContainer = styled.div`
  .ant-pagination {
    width: fit-content;
    margin: 0 auto;
  }
`

const ListPost: React.FC<ListPostProps> = (props) => {
  const {
    categoryId,
    Component,
    fetcher = async (reqParams) => {
      let response = await post.getAll({
        categoryId,
        ...reqParams,
      })

      return response
    },
    ...rest
  } = props

  const [postResponse, setPostResponse] = useState<
    PaginationReponseData<Post[]>
  >()
  const [reqParams, setReqParams] = useState<PaginationRequest>({
    page: 0,
    size: 10,
  })

  const getData = async () => {
    let response = await fetcher(reqParams)

    setPostResponse(response)
  }

  useDebounceEffect(
    () => {
      getData()
    },
    [categoryId, reqParams],
    {
      wait: 90,
    },
  )

  useEffect(() => {
    setReqParams({
      ...reqParams,
      page: 0,
    })
  }, [categoryId])

  return (
    <>
      <Container {...rest}>
        {postResponse?.data.map((post) => {
          return (
            <Component {...post} key={post.id}>
              <BlogAction
                {...post}
                afterDelete={() => {
                  getData()
                }}
              />
            </Component>
          )
        })}
      </Container>

      <PaginationContainer>
        <StyledPagination
          simple
          onChange={(page) => {
            setReqParams({
              ...reqParams,
              page: page - 1,
            })
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          current={postResponse ? postResponse?.pages.page + 1 : 1}
          total={postResponse?.pages.totalCount}
        />
      </PaginationContainer>
    </>
  )
}

export default ListPost
