import React from 'react'
import { Link } from 'gatsby'
import { Provider } from 'rebass'
import '../styles/main.scss'
import Header from './Header'

const theme = {
  fonts: {
    sans: `'Open Sans', 'Helvetica', -apple-system, BlinkMacSystemFont,
  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
  'Droid Sans', 'Helvetica Neue', sans-serif`,
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    normal: 300,
    bold: 500,
  },
  colors: {
    blue: '#4a90e2',
  },
}

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <Provider theme={theme}>
        <Header location={location} />
        {children}
      </Provider>
    )
  }
}

export default Layout
