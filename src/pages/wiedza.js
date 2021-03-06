import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Button from '../components/Button'
import Cta from '../components/Cta'
import Masthead from '../components/Masthead'
import Accordion from '../components/Accordion'
import { TITLE_SUFFIX } from '../constants/constants'

const TITLE = 'Informacje o pschoterapii'
class KnowledgePage extends Component {
  render() {
    let { data, location } = this.props
    const pathName = location && location.hash && location.hash.replace('#', '')
    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[
            {
              name: 'description',
              content:
                'Wiedza na temat psychologii i psychoterapii.' +
                'Psychoterapia par i małżeństw. ' +
                'Psychoterapia poznawczo-behawioralna. Dowiedz się więcej',
            },
          ]}
          title={`${TITLE} | ${TITLE_SUFFIX}`}
        />
        <Masthead>
          <Masthead.Head>{TITLE}</Masthead.Head>
          <Masthead.Text>Dowiedz się więcej o psychoterapii</Masthead.Text>
        </Masthead>
        <Accordion
          imageFluid={data.image.childImageSharp.fluid}
          elementToDisplay={pathName}
        />
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

KnowledgePage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
}

export default KnowledgePage

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
