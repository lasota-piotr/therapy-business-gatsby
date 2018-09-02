import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Button from '../components/Button'
// import LatestBlogPosts from '../components/LatestBlogPosts'
import FeatureLarge from '../components/FeatureLarge'
import LinkFeature from '../components/LinkFeature'

class IndexPage extends Component {
  scrollElementRef = React.createRef()
  handleScrollToElement = () => {
    window.scrollTo({
      top: this.scrollElementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  render() {
    let { data, location } = this.props
    const siteTitle = get(data, 'site.siteMetadata.title')
    const siteDescription = get(data, 'site.siteMetadata.description')
    // const posts = get(data, 'allMarkdownRemark.edges')
    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Hero
          imageFluid={data.heroImage.childImageSharp.fluid}
          headerText="Build Something Brilliant."
          subHeaderText="Build lean, beautiful websites with a clean and contemporary look to suit a range of purposes."
          contentChildren={
            <Button px={4} py={3} onClick={this.handleScrollToElement}>
              Dowiedz się więcej
            </Button>
          }
        />
        <Cta innerRef={this.scrollElementRef}>
          <Cta.Head>All the tools you'll need</Cta.Head>
          <Cta.Text>
            Whether you’re building a welcome mat for your SaaS or a clean,
            corporate portfolio, Stack has your design needs covered.
          </Cta.Text>
        </Cta>

        <Features />
        <FeatureLarge>
          <FeatureLarge.Content>
            <FeatureLarge.Header>O mnie</FeatureLarge.Header>
            <FeatureLarge.Body>
              <p>
                Jestem psychologiem i psychoterapeutą poznawczo-behawioralnym w
                trakcie procesu certyfikacji. W swojej pracy terapeutycznej
                posługuję się głównie podejściem poznawczo-behawioralnym oraz
                terapią schematu.
              </p>
              <LinkFeature to="/o-mnie">Dowiedz się więcej »</LinkFeature>
            </FeatureLarge.Body>
          </FeatureLarge.Content>
          <FeatureLarge.Img fluid={data.aboutImage.childImageSharp.fluid} />
        </FeatureLarge>
        <Testimonials />
        {/* TODO: ENABLE BLOG */}
        {/*<LatestBlogPosts posts={posts} />*/}
        <Cta>
          <Cta.Head>Skontaktuj się ze mną</Cta.Head>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 510, maxHeight: 340) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid_withWebp
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
