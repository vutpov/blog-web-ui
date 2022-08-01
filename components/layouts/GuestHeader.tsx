import React from 'react'
import styled from 'styled-components'
import Button from '../shared/Button'
import { H4 } from '../shared/Text'
import BodyPadding from './BodyPadding'
import Link from 'next/link'

const Outter = styled(BodyPadding)`
  border-bottom: 1px solid #bbbbbb;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;
`

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 37px 0;
`

const Logo = styled.img``

const StyledHome = styled.a`
  justify-self: center;
`

const RightNav = styled.nav`
  justify-self: right;
  display: flex;
  align-items: center;
  gap: 36px;
`

const GuestHeader: React.FC<{
  style?: React.CSSProperties
}> = (props) => {
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
          <Link href="/sign-up" passHref>
            <a>
              <H4>Sign Up</H4>
            </a>
          </Link>

          <Link href="/login" passHref>
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
                  Login
                </H4>
              </Button>
            </a>
          </Link>
        </RightNav>
      </Container>
    </Outter>
  )
}

export default GuestHeader
