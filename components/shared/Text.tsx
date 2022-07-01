import styled from 'styled-components'

const H4 = styled.h4`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`

const H5 = styled.h5`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
`

export { H4, H5 }
