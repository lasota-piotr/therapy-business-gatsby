import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import Container from '../components/Container'
import BlogPostBody from '../components/BlogPostBody'
import BlogPostContent from '../components/BlogPostContent'

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const post = get(data, 'contentfulBlogPost')
    const description = get(post, 'description.description')
    const siteTitle = get(data, 'site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[
            {
              name: 'description',
              content: description || undefined,
            },
          ]}
          title={`${post.title} | ${siteTitle}`}
        />
        <BlogPostContent
          post={post}
          next={next}
          previous={previous}
          avatar={data.aboutImage.childImageSharp.fixed}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "DD.MM.YYYY")
      tags
      mainImage {
        sizes(maxWidth: 2000, resizingBehavior: FILL) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
        childMarkdownRemark {
          html
        }
      }
    }
    aboutImage: file(relativePath: { eq: "ilona-lasota.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 60, width: 60, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
