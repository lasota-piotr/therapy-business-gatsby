import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import FeatureLarge from '../components/FeatureLarge'
import LinkFeature from '../components/LinkFeature'
import CooperationPageOneImg from '../components/CooperationPageOneImage'
import Link from '../components/Link'

const TITLE = 'Współpraca ze specjalistami'

const CooperationPage = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${TITLE} | ${siteTitle}`}
      />
      <Masthead>
        <Masthead.Head>{TITLE}</Masthead.Head>
        <Masthead.Text>
          Sprawdź specjalistów z którymi współpracuję
        </Masthead.Text>
      </Masthead>

      <FeatureLarge>
        <FeatureLarge.Content>
          <FeatureLarge.Header>Agnieszka Wojnar-Jadczyszyn</FeatureLarge.Header>
          <FeatureLarge.Body>
            <p>Psycholog, psychoterapeuta poznawczo-behawioralny.</p>
            <p>
              <strong>Nr telefonu: </strong>
              <Link target="_self" rel="" to="tel:+48665400815">
                665-400-815
              </Link>
            </p>
            <p>
              <strong>Email: </strong>
              <Link
                target="_self"
                rel=""
                to="mailto:a.wojnar.jadczyszyn@gamil.com"
              >
                a.wojnar.jadczyszyn@gamil.com
              </Link>
            </p>
            <LinkFeature to="/wspolpraca/agnieszka-wojnar-jadczyszyn">
              Dowiedz się więcej »
            </LinkFeature>
          </FeatureLarge.Body>
        </FeatureLarge.Content>
        <CooperationPageOneImg
          alt="Agnieszka Wojnar-Jadczyszyn - Psycholog Warszawa Włochy, Ursus"
          fluid={data.cooperation1.childImageSharp.fluid}
        />
      </FeatureLarge>
    </Layout>
  )
}

export default CooperationPage

export const pageQuery = graphql`
  query cooperationQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    cooperation1: file(
      relativePath: { eq: "agnieszka-wojnar-jadczyszyn.jpg" }
    ) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
