import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../shared/Button'
import { H4 } from '../shared/Text'
import BodyPadding from './BodyPadding'
import UserSVG from '@/svg/user.svg'
import Icon from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { AuthContext } from '../auth/AuthProvider'

interface UserHeaderProps {
  [index: string]: any
}

const Outter = styled(BodyPadding)`
  border-bottom: 1px solid #bbbbbb;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;
`

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 37px 0;
`

const Logo = styled.img`
  justify-self: center;
`

const RightNav = styled.nav`
  justify-self: right;
  display: flex;
  align-items: center;
  gap: 36px;
`

const StyledUserIcon = styled(Icon)`
  svg {
    font-size: 36px;
    cursor: pointer;
  }
`

const StyledHome = styled.a`
  justify-self: center;
`

const UserHeader: React.FC<UserHeaderProps> = (props) => {
  const { logout } = useContext(AuthContext)

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link href={`my-posts`} passHref>
              <a>My Posts</a>
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <div
              onClick={() => {
                logout()
              }}
            >
              Logout
            </div>
          ),
        },
      ]}
    />
  )

  return (
    <Outter {...props}>
      <Container>
        <div />
        <Link href="/" passHref>
          <StyledHome>
            <Logo src={'/logo.png'} />
          </StyledHome>
        </Link>

        <RightNav>
          <Link href="/create-post" passHref>
            <a>
              <Button
                style={{
                  width: 132,
                }}
                type={'primary'}
              >
                <H4
                  style={{
                    color: 'white',
                  }}
                >
                  Post
                </H4>
              </Button>
            </a>
          </Link>

          <Dropdown overlay={menu} trigger={['click']} placement="bottom">
            <StyledUserIcon component={UserSVG} />
          </Dropdown>
        </RightNav>
      </Container>
    </Outter>
  )
}

export default UserHeader
