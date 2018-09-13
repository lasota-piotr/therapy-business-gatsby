import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from '../styleUtils/media'
import Container from './Container'
import BlogPostBody from './BlogPostBody'
import BlogPostAuthor from './BlogPostAuthor'
import BlogPostRelated from './BlogPostRelated'

const BlogPostContent = ({ post, previous, next, avatar }) => {
  return (
    <Fragment>
      <BlogPostMainPhoto alt="" sizes={post.mainImage.sizes} />

      <Container width="small">
        <BlogPostContentContainerMasthead>
          <BlogPostTitle>{post.title}</BlogPostTitle>
          <BlogPostDescription
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html,
            }}
          />
          <BlogPostAuthor avatar={avatar} />
        </BlogPostContentContainerMasthead>
        <BlogPostContentContainer>
          <BlogPostBody
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <BlogPostDate>{post.publishDate}</BlogPostDate>
          <div>
            Tagi:{' '}
            {post.tags.map((el, i) => (
              <span key={i}>
                {el}
                {i !== post.tags.length - 1 && ', '}
              </span>
            ))}
          </div>
        </BlogPostContentContainer>
      </Container>
      <BlogPostRelated previous={previous} next={next} />
    </Fragment>
  )
}

const BlogPostMainPhoto = styled(Img)`
  max-height: 400px;
  min-height: 300px;
  margin-bottom: 2rem;
`

const BlogPostContentContainer = styled.div`
  color: #333;
  padding: 0 1rem;
  ${media.tablet`
      padding: 0 1.5rem;
  `};
`

const BlogPostContentContainerMasthead = styled(BlogPostContentContainer)`
  ${media.tablet`
      padding: 0 0.25rem;
  `};
`

const BlogPostDescription = styled.div`
  p {
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
    &:last-child {
      margin-bottom: 1.5rem;
    }
  }
`

const BlogPostTitle = styled.h1`
  font-weight: 400;
`

const BlogPostDate = styled.p`
  margin: 1rem 0;
`

export default BlogPostContent
