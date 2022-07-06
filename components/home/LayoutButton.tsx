import React, { useState } from 'react'
import styled from 'styled-components'
import GridSVG from '@/svg/grid.svg'
import ListSVG from '@/svg/list.svg'
import Icon from '@ant-design/icons'

const Container = styled.div<{
  left?: boolean
}>`
  display: flex;
  position: relative;
  cursor: pointer;

  &:before {
    transition: transform 0.2s ease-in;
    position: absolute;
    width: 50%;
    content: '';
    display: block;
    height: 100%;
    background-color: ${({ theme }) => theme.primaryColor.main};
    border-radius: 8px;
    transform: ${({ left }) => (left ? `translateX(0)` : `translateX(100%)`)};
  }
`

const LayoutOption = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 10px;

  &.active path {
    fill: white;
    stroke: white;
  }

  svg {
    font-size: 32px;
  }
`

export type LayoutValue = 'grid' | 'list'

interface LayoutButtonProps {
  onChange?: (value: LayoutValue) => void
}

const LayoutButton: React.FC<LayoutButtonProps> = (props) => {
  const [left, setLeft] = useState(true)
  const { onChange } = props

  return (
    <Container
      left={left}
      onClick={() => {
        const result = !left

        setLeft(result)
        onChange?.(result ? 'list' : 'grid')
      }}
    >
      <LayoutOption className={left ? 'active' : ''}>
        <Icon component={ListSVG} />
      </LayoutOption>
      <LayoutOption className={!left ? 'active' : ''}>
        <GridSVG />
      </LayoutOption>
    </Container>
  )
}

export default LayoutButton
