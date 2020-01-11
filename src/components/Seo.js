import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ location, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const { siteUrl } = site.siteMetadata
  const { pathname } = location || {}

  const currentUrl = `${siteUrl}${pathname}`
  return (
    <Helmet>
      {siteUrl && pathname && <link rel="canonical" href={currentUrl} />}
      {children}
    </Helmet>
  )
}

export default Seo
