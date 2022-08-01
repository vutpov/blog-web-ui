import React from 'react'
import useIsLogin from '../hooks/useIsLogin'
import GuestHeader from './GuestHeader'
import UserHeader from './UserHeader'

interface HeaderProps {
  [index: string]: any
}

const Header: React.FC<HeaderProps> = (props) => {
  const isLogin = useIsLogin()

  const Comp = isLogin ? UserHeader : GuestHeader

  return <Comp {...props} />
}

export default Header
