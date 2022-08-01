import dynamic from 'next/dynamic'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
import Header from 'next/head'

const AuthProvider = dynamic(() => import('../auth/AuthProvider'), {
  ssr: false,
})

const SeoMeta = () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}`

  const { title, description, attachment } = {
    title: 'Blog post',
    description: 'Blob post for you',
    attachment: `${url}/logo.png`,
  }

  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={attachment} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={attachment} />
    </>
  )
}

const App: React.FC<{
  children: React.ReactNode
}> = (props) => {
  return (
    <>
      <Header>
        <SeoMeta />
      </Header>

      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>{props.children}</AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
