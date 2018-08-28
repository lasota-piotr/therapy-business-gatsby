import React from 'react'
import { Link } from 'gatsby'
import { Provider } from 'rebass'
import '../styles/main.scss'
import Header from './Header'

const theme = {
  fontWeights: {
    normal: 400,
    bold: 600,
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
