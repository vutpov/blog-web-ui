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
  confirm: string
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    confirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required()

const auth = new AuthService()

const Register = () => {
  const { grayColor, primaryColor } = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
  })

  const { setState, login } = useContext(AuthContext)

  const [submitDisable, setSubmitDisable] = useState(false)

  const router = useRouter()

  const onSubmit = async (data: FormValue) => {
    try {
      setSubmitDisable(true)
      const response = await auth.register(data)

      if (!response) {
        return
      }

      const loginResponse = await login({
        username: data.username,
        password: data.password,
      })

      if (!loginResponse) {
        return
      }

      setState((old) => {
        return {
          ...old,
          user: response.data,
        }
      })

      router.push('/')
    } catch (e) {
      console.error(e)
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
          Sign up
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

        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <>
              <InputPassword
                {...field}
                placeholder="Confirm Password"
                style={{
                  marginTop: 40,
                }}
              />
              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.confirm?.message}
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
            Sign up
          </H4>
        </Button>

        <Box h={30} />

        <Link href={'/login'} passHref>
          <a>
            <P
              style={{
                color: primaryColor.main,
              }}
            >
              Go to Login
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

export default Register
