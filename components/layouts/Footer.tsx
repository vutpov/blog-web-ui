import styled from 'styled-components'
import { H4 } from '../shared/Text'

const StyledFooter = styled.footer`
  background: #f6f5f5;
  text-align: center;
  padding: 44px 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      <H4>© 2022 Cubetiq Solution</H4>
    </StyledFooter>
  )
}

export default Footer
