import Box from '@/components/shared/Box'
import Button from '@/components/shared/Button'
import Input, { InputPassword } from '@/components/shared/Input'
import { ErrorMessage, H4, P } from '@/components/shared/Text'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styled, { useTheme } from 'styled-components'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthService from '@/service/auth.service'
import { AuthContext } from '../auth/AuthProvider'
import { useRouter } from 'next/router'
import { getErrorMessage, showMessage } from '@/utils'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const BackgroundSide = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => {
    return theme.primaryColor.main
  }};
  align-items: center;
`

const Form = styled.form`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 80px;
`

interface FormValue {
  username: string
  password: string
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

const Login = () => {
  const { grayColor, primaryColor } = useTheme()

  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
  })

  const { login, verify } = useContext(AuthContext)

  const [submitDisable, setSubmitDisable] = useState(false)

  const onSubmit = async (data: FormValue) => {
    try {
      setSubmitDisable(true)

      const token = await login(data)

      if (!token) {
        return
      }

      const user = await verify(token)

      if (!user) {
        return
      }

      router.push('/')
    } catch (e) {
      console.error(e)

      showMessage({
        key: 'error',
        content: getErrorMessage(e),
      })
    }
    setSubmitDisable(false)
  }

  return (
    <Container>
      <BackgroundSide />
      <Form>
        <H4
          style={{
            fontStyle: 'italic',
            marginBottom: 54,
          }}
        >
          Login
        </H4>

        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <>
              <Input {...field} placeholder="Username" />
              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.username?.message}
              </ErrorMessage>
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <InputPassword
                {...field}
                placeholder="Password"
                style={{
                  marginTop: 40,
                }}
              />
              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.password?.message}
              </ErrorMessage>
            </>
          )}
        />

        <Button
          type="primary"
          style={{
            width: 154,
            margin: '0 auto',
            marginTop: 40,
          }}
          disabled={submitDisable}
          onClick={handleSubmit((d) => onSubmit(d))}
        >
          <H4
            style={{
              color: `white`,
            }}
          >
            Login
          </H4>
        </Button>

        <Box h={30} />

        <Link href={'/sign-up'} passHref>
          <a>
            <P
              style={{
                color: primaryColor.main,
              }}
            >
              Go to Sign Up
            </P>
          </a>
        </Link>

        <Box h={15} />

        <Link href={'/'} passHref>
          <a>
            <P
              style={{
                color: grayColor.l1,
              }}
            >
              Back to Home
            </P>
          </a>
        </Link>
      </Form>
    </Container>
  )
}

export default Login
