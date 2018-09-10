import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class BlogPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {!!posts &&
          posts.map(({ node }) => {
            const title = get(node, 'title') || node.slug
            return (
              <div key={node.slug}>
                <h3>
                  <Link to={node.slug}>{title}</Link>
                </h3>
                <small>{node.publishDate}</small>
                {node.mainImage && <Img alt="" sizes={node.mainImage.sizes} />}
                {node.tags.map((el, i) => (
                  <div key={i}>{el}</div>
                ))}
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.description.childMarkdownRemark.html,
                  }}
                />
              </div>
            )
          })}
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query blogQuery {
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
          publishDate(formatString: "MMMM DD, YYYY")
          tags
          mainImage {
            sizes(maxWidth: 510, maxHeight: 340, resizingBehavior: FILL) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
