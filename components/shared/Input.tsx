import { Input as AntdInput } from 'antd'
import styled from 'styled-components'

const Input = styled(AntdInput)`
  font-size: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
`

const InputPassword = styled(AntdInput.Password)`
  font-size: 24px;
  padding-top: 14px;
  padding-bottom: 14px;

  input::-webkit-input-placeholder {
    font-size: 24px;
  }

  input::-ms-input-placeholder {
    font-size: 24px;
  }

  input::placeholder {
    font-size: 24px;
  }
`

const TextArea = styled(Input.TextArea)`
  &::-webkit-input-placeholder {
    font-size: 24px;
  }

  &::-ms-input-placeholder {
    font-size: 24px;
  }

  &::placeholder {
    font-size: 24px;
  }
`

export { InputPassword, Input as default, TextArea }
