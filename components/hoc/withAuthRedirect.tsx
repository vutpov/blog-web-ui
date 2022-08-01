import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useIsLogin from '../hooks/useIsLogin'

type withAuthRedirect = <T>(
  Comp: React.JSXElementConstructor<T>,
  args: {
    deniedUrl?: string
    authorizedUrl?: string
  },
) => React.JSXElementConstructor<T>

const withAuthRedirect: withAuthRedirect = (Comp, args) => {
  return (props) => {
    const isLogin = useIsLogin()
    const router = useRouter()
    const { deniedUrl, authorizedUrl } = args
    const [loading, setLoading] = useState(
      typeof window === 'undefined' ? false : true,
    )

    useEffect(() => {
      if (isLogin && authorizedUrl) {
        router.push(authorizedUrl)
      } else if (!isLogin && deniedUrl) {
        router.push(deniedUrl)
      } else {
        setLoading(false)
      }
    }, [isLogin, authorizedUrl, deniedUrl])

    return loading ? <div>checking auth...</div> : <Comp {...props} />
  }
}

export default withAuthRedirect
