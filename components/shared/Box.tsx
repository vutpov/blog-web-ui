import React from 'react'

interface BoxProps {
  h?: number
  w?: number
}

const Box: React.FC<BoxProps> = (props) => {
  const { h, w } = props
  return (
    <div
      style={{
        width: w,
        height: h,
      }}
    />
  )
}

export default Box
