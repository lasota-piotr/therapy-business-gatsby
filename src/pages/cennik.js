import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import Pricing from '../components/Pricing'

const PricingPage = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Masthead>
        <Masthead.Head>
          Cennik
        </Masthead.Head>
        <Masthead.Text>
          Each purchase of Stack comes with six months free support — and a
          lifetime of free content and bug-fix updates.
        </Masthead.Text>
      </Masthead>

      <Pricing />

      {/* TODO: ADD TESTIMONIALS */}
    </Layout>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query cennikQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
