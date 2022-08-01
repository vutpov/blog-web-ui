import React from 'react'
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

const P = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`

const ErrorMessage: React.FC<{
  children?: React.ReactNode
  style?: React.CSSProperties
}> = (props) => {
  const { children, ...rest } = props

  return children ? (
    <P
      {...rest}
      style={{
        ...rest.style,
        color: 'red',
      }}
    >
      {children}
    </P>
  ) : (
    <React.Fragment />
  )
}

export { H4, H5, P, ErrorMessage }
