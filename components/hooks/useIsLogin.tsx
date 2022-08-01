import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'

const useIsLogin = () => {
  const { loading, user } = useContext(AuthContext)

  if (loading) {
    return
  }

  let result = Boolean(user)

  return result
}

export default useIsLogin
