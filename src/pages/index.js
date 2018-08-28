import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Lead from '../components/Lead'

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
      <Lead />

      <section>
        Ostatnie artykuły
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </section>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
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
