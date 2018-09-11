import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import Container from '../components/Container'
import BlogPostContent from '../components/BlogPostContent'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[
            {
              name: 'description',
              content: post.description.description || undefined,
            },
          ]}
          title={`${post.title} | ${siteTitle}`}
        />
        <Masthead>
          <Masthead.Head>{post.title}</Masthead.Head>
          <Masthead.Text>Umów się na wizytę</Masthead.Text>
        </Masthead>
        <Container width="small">
          <p>{post.publishDate}</p>
          {post.tags.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
          <div
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html,
            }}
          />
          <Img alt="" sizes={post.mainImage.sizes} />
          <BlogPostContent
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </Container>
        <Container>
          <hr />
          <ul>
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.title} →
                </Link>
              </li>
            )}
          </ul>
        </Container>
      </Layout>
    )
    // return (
    //   <Layout location={this.props.location}>
    //     <Helmet
    //       htmlAttributes={{ lang: 'pl' }}
    //       meta={[{ name: 'description', content: siteDescription }]}
    //       title={`${post.title} | ${siteTitle}`}
    //     />
    //     <h1>{post.title}</h1>

    //   </Layout>
    // )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      tags
      mainImage {
        sizes(maxWidth: 510, maxHeight: 340, resizingBehavior: FILL) {
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
  }
`
