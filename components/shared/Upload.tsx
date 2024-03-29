import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload as AntdUpload } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type {
  RcFile,
  UploadFile,
  UploadProps as AntdUploadProps,
} from 'antd/es/upload/interface'
import React, { useState } from 'react'
import styled from 'styled-components'

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const StyledUpload = styled(AntdUpload)``

interface UploadProps extends AntdUploadProps {
  defaultImageUrl?: string
}

const Upload: React.FC<UploadProps> = (props) => {
  const { defaultImageUrl, ...rest } = props

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>(defaultImageUrl || '')

  const handleChange: AntdUploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false)
        setImageUrl(url)
        props.onChange?.(info)
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <StyledUpload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      {...rest}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </StyledUpload>
  )
}

export default Upload
