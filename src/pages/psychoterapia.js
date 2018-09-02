import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { between } from 'polished'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Button from '../components/Button'
import FeatureLarge from '../components/FeatureLarge'
import Cta from '../components/Cta'
import graduation from '../assets/graduation.svg'
import ether from '../assets/ether.svg'
import highFive from '../assets/high-five.svg'
import Hero from '../components/Hero'
import Masthead from '../components/Masthead'
import Accordion from '../components/Accordion'

class PsychotherapyPage extends Component {
  render() {
    let { data, location } = this.props
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
          <Masthead.Head>Informacje o pschoterapii</Masthead.Head>
          <Masthead.Text>Dowiedz się więcej o psychoterapii</Masthead.Text>
        </Masthead>
        <Accordion imageFluid={data.image.childImageSharp.fluid}/>
        <Cta>
          <Cta.Head>Zapisz się na wizytę</Cta.Head>
          <Cta.Text>Zacznij od siebie</Cta.Text>
          <Link to="/kontakt">
            <Button px={4} py={3}>
              Skontaktuj się
            </Button>
          </Link>
        </Cta>
      </Layout>
    )
  }
}

PsychotherapyPage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
}

export default PsychotherapyPage

export const pageQuery = graphql`
  query psychoterapyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(relativePath: { eq: "journey.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
