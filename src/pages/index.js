import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Button from '../components/Button'
import LatestBlogPosts from '../components/LatestBlogPosts'

const IndexPage = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')
  const posts = get(data, 'allMarkdownRemark.edges')

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Hero imageFluid={data.heroImage.childImageSharp.fluid} />
      <Cta>
        <Cta.Head>All the tools you'll need</Cta.Head>
        <Cta.Text>
          Whether you’re building a welcome mat for your SaaS or a clean,
          corporate portfolio, Stack has your design needs covered.
        </Cta.Text>
      </Cta>

      <Features />
      <Testimonials />

      <LatestBlogPosts posts={posts} />
      <Cta>
        <Cta.Head>All the tools you'll need</Cta.Head>
        <Cta.Text>
          Whether you’re building a welcome mat for your SaaS or a clean,
          corporate portfolio, Stack has your design needs covered.
        </Cta.Text>
        <Button>Skontaktuj się</Button>
      </Cta>
    </Layout>
  )
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
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
