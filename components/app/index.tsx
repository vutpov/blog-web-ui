import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'

const App: React.FC<{
  children: React.ReactNode
}> = (props) => {
  return <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
}

export default App
