import { getErrorMessage, showMessage } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled, { useTheme } from 'styled-components'
import * as yup from 'yup'
import Input, { TextArea } from '../shared/Input'
import { ErrorMessage, H4, H5 } from '../shared/Text'
import Upload from '../shared/Upload'
import CategorySelect from './category-select'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 34px;
`

const schema = yup
  .object({
    title: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required().max(255),
  })
  .required()

interface FormValue {
  title: string
  category: string
  description: string
  image: any
}

const StyledCategory = styled(CategorySelect)``

interface PostFormProps {
  onSubmit: (data: FormValue) => Promise<any>
  defaultValues?: FormValue
  submitText?: string
}

const PostForm: React.FC<PostFormProps> = (props) => {
  let { defaultValues, submitText = 'Create' } = props

  defaultValues = defaultValues || {
    category: '',
    description: '',
    image: '',
    title: '',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: defaultValues.category,
      description: defaultValues.description,
      title: defaultValues.title,
    },
  })

  const imgRef = useRef(defaultValues.image)

  const [submitDisable, setSubmitDisable] = useState(false)

  const router = useRouter()

  const onSubmit = async (data: FormValue) => {
    try {
      setSubmitDisable(true)
      await props.onSubmit(data)
      router.push('/')
    } catch (e) {
      showMessage({
        content: getErrorMessage(e),
      })
      setSubmitDisable(false)
    }
  }

  return (
    <>
      <Form>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <>
              <Input {...field} placeholder="Title" />
              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.title?.message}
              </ErrorMessage>
            </>
          )}
        />

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <>
              <StyledCategory
                size="large"
                onChange={(value) => {
                  field.onChange(value)
                }}
                value={field.value}
              />

              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.category?.message}
              </ErrorMessage>
            </>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <>
              <TextArea rows={4} {...field} placeholder={'Description'} />
              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.description?.message}
              </ErrorMessage>
            </>
          )}
        />

        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <>
              <Upload
                onChange={(info) => {
                  field.onChange(info.file)
                }}
                defaultImageUrl={imgRef.current}
              />
              <ErrorMessage
                style={{
                  textAlign: 'left',
                }}
              >
                {errors?.title?.message}
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
            height: `auto`,
          }}
          disabled={submitDisable}
          onClick={handleSubmit((d) => onSubmit(d))}
        >
          <H4
            style={{
              color: `white`,
            }}
          >
            {submitText}
          </H4>
        </Button>
      </Form>
    </>
  )
}

export default PostForm
