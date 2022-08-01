import React from 'react'
import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd'
import styled from 'styled-components'

const StyledSelect = styled(AntdSelect)``

export interface SelectProps extends AntdSelectProps {}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <StyledSelect
      showSearch
      optionFilterProp="children"
      //@ts-ignore
      filterOption={(input, option) => {
        let label: string = option!.children || option!.label
        return label.toLowerCase().includes(input.toLowerCase())
      }}
      {...props}
    />
  )
}

export default Select
