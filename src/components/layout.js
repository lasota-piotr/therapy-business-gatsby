import React from 'react'
import { ThemeProvider } from 'styled-components'
import '../styles/main.scss'
import Header from './Header'

const theme = {
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
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
  colors: {
    blue: '#4a90e2',
  },
}

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <Header location={location} />
          {children}
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
