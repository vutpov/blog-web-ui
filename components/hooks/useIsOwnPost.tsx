import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'

const useIsOwnPost = (postUsername?: string) => {
  const { user } = useContext(AuthContext)

  return postUsername ? user?.username === postUsername : undefined
}

export default useIsOwnPost
