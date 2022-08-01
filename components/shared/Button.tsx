import { Button as AntdButton } from 'antd'
import styled from 'styled-components'

const Button = styled(AntdButton).withConfig({
  shouldForwardProp(prop, defaultValidatorFn) {
    return !['hoverColor'].includes(prop) && defaultValidatorFn(prop)
  },
})<{
  hoverColor?: string
}>`
  height: unset;
  border-radius: 8px;
  padding: 7px 0;

  &:hover {
    background: ${(props) => props.hoverColor} !important;
  }
`

export default Button
