import React from 'react'
import { ThemeProvider } from 'styled-components'
import '../styles/main.scss'
import Header from './Header'
import Seo from './Seo'

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: '#4a90e2',
    gray: '#e4e4ed',
    lightgray: '#f6f6ff',
    white: '#fff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: `'Open Sans', 'Helvetica', -apple-system, BlinkMacSystemFont,
  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
  'Droid Sans', 'Helvetica Neue', sans-serif`,
    mono: 'Menlo, monospace',
    serif: `Lora, 'Merriweather', serif`,
  },
  fontWeights: {
    normal: 300,
    bold: 500,
    bolder: 700,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  containerPaddingHorizontal: '1rem',
}

const Layout = props => {
  const { location, children } = props

  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo location={location} />
        <Header location={location} />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
