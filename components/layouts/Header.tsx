import React from 'react'
import styled from 'styled-components'
import Button from '../shared/Button'
import { H4 } from '../shared/Text'
import BodyPadding from './BodyPadding'

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

const Header = () => {
  return (
    <Outter>
      <Container>
        <div />
        <Logo src={'logo.png'} />

        <RightNav>
          <H4>Sign In</H4>

          <Button
            style={{
              width: 132,
            }}
            type={'primary'}
            hoverColor={'red'}
          >
            <H4
              style={{
                color: 'white',
              }}
            >
              Login
            </H4>
          </Button>
        </RightNav>
      </Container>
    </Outter>
  )
}

export default Header
