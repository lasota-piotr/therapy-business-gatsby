import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import Cta from '../components/Cta'
import Button from '../components/Button'
import BlogPosts from '../components/BlogPosts'
import { TITLE_SUFFIX } from '../constants/constants'

const TITLE = 'Blog'
const DESCRIPTION = 'Artykuły z zakresu psychologii i psychoterapii'
class BlogPage extends React.Component {
  render() {
    const { location } = this.props
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[
            {
              name: 'description',
              content: `${DESCRIPTION} | ${siteDescription}`,
            },
          ]}
          title={`${TITLE} | ${TITLE_SUFFIX}`}
        />
        <Masthead>
          <Masthead.Head>{TITLE}</Masthead.Head>
          <Masthead.Text>{DESCRIPTION}</Masthead.Text>
        </Masthead>

        {!!posts && <BlogPosts posts={posts} />}

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
  }
`
