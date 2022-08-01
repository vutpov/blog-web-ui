import { LoginResponse, MeResponse } from '@/models/reponse/auth.response'
import { ReponseData } from '@/models/reponse/index.response'
import AuthService from '@/service/auth.service'
import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

interface AuthContextState {
  user: MeResponse | null
  loading: boolean
}

const defaultContextState: AuthContextState = {
  user: null,
  loading: false,
}

type Login = (data: {
  username: string
  password: string
}) => Promise<string> | undefined

type Verify = (token?: string) => Promise<MeResponse | undefined>
type Logout = () => void

interface AuthContextStateFunctions {
  login: Login
  verify: Verify
  logout: Logout
  setState: React.Dispatch<React.SetStateAction<AuthContextState>>
}

export const AuthContext = React.createContext<
  AuthContextState & AuthContextStateFunctions
>({
  ...defaultContextState,
  //@ts-ignore
  login: async () => {},
  logout: async () => {},
})

interface AuthProviderProps {
  children?: React.ReactNode
}

const auth = new AuthService()

const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [token, setToken, deleteToken] = useLocalStorage<string>('token')

  const initLoading = token ? true : false

  const [state, setState] = useState<AuthContextState>({
    ...defaultContextState,
    loading: initLoading,
  })

  const login: Login = async (data) => {
    let result: any
    const res = await auth.login(data)
    result = res.data.token

    setToken(result)

    return result
  }

  const verify: Verify = async (token) => {
    setState({
      ...state,
      loading: true,
    })

    let result

    const res = await auth.me(token)
    result = res.data

    setState({
      ...state,
      user: result,
      loading: false,
    })

    return result
  }

  const logout = () => {
    setState({
      ...state,
      user: null,
      loading: false,
    })

    deleteToken()
  }

  useEffect(() => {
    const doVerify = async () => {
      await verify()
    }

    const token = localStorage.getItem(`token`)

    if (token) {
      doVerify()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setState,
        login,
        verify,
        logout,
      }}
    >
      {state.loading ? <div>loading...</div> : props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
