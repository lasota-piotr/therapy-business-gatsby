import React, { Component, Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Cta from '../components/Cta'
import Features from '../components/Features'
import MainPageTestimonials from '../components/MainPageTestimonials'
import Button from '../components/Button'
import BlogPosts from '../components/BlogPosts'
import FeatureLarge from '../components/FeatureLarge'
import LinkFeature from '../components/LinkFeature'
import MainHero from '../components/MainHero'

class IndexPage extends Component {
  scrollElementRef = React.createRef()
  render() {
    let { data, location } = this.props
    const siteTitle = get(data, 'site.siteMetadata.title')
    const siteDescription = get(data, 'site.siteMetadata.description')
    const posts = get(data, 'allContentfulBlogPost.edges')
    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <MainHero/>
        <Cta innerRef={this.scrollElementRef}>
          <Cta.Head>
            Nawet najdłuższa droga zaczyna się od pierwszego kroku
          </Cta.Head>
          <Cta.Text>Pomoc psychologiczna i psychoterapeutyczna</Cta.Text>
        </Cta>

        <Features />
        <FeatureLarge>
          <FeatureLarge.Content>
            <FeatureLarge.Header>O mnie</FeatureLarge.Header>
            <FeatureLarge.Body>
              <p>
                Jestem psychologiem i psychoterapeutą
                poznawczo&#8209;behawioralnym w trakcie procesu certyfikacji. W
                swojej pracy terapeutycznej posługuję się głównie podejściem
                poznawczo-behawioralnym oraz terapią schematu.
              </p>
              <LinkFeature to="/o-mnie">Dowiedz się więcej »</LinkFeature>
            </FeatureLarge.Body>
          </FeatureLarge.Content>
          <FeatureLarge.Img
            alt="Ilona Lasota - Psycholog Warszawa Włochy, Ursus"
            fluid={data.aboutImage.childImageSharp.fluid}
          />
        </FeatureLarge>
        <MainPageTestimonials />

        {!!posts && <BlogPosts posts={posts} />}
        <Cta>
          <Cta.Head>Umów się na wizytę</Cta.Head>
          <Cta.Text>Zdecyduj o własnej przyszłości</Cta.Text>
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

IndexPage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
}

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD.MM.YYYY")
          tags
          mainImage {
            sizes(maxWidth: 510, maxHeight: 340, resizingBehavior: FILL) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
    aboutImage: file(relativePath: { eq: "ilona-lasota.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 360, maxWidth: 540) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
