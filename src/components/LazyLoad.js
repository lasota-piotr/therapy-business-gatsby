import React from 'react'
import Observer from 'react-intersection-observer'
import PropTypes from 'prop-types'

function LazyLoad({ children }) {
  return (
    <Observer triggerOnce rootMargin="0px 0px 150px 0px">
      {({ inView, ref }) => <div ref={ref}>{inView && children}</div>}
    </Observer>
  )
}

LazyLoad.propTypes = { children: PropTypes.any }

export default LazyLoad
