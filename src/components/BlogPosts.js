import React from 'react'
import styled from 'styled-components'
import media from '../styleUtils/media'
import BlogCard from './BlogCard'
import Container from './Container'

const BlogPosts = ({ posts }) => {
  return (
    <BlogPostsWrapper>
      <Container>
        <BlogPostsContainer>
          {posts.map(({ node }) => (
            <BlogCard key={node.slug} data={node} />
          ))}
        </BlogPostsContainer>
      </Container>
    </BlogPostsWrapper>
  )
}

const BlogPostsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
`

const BlogPostsWrapper = styled.section`
  margin: 6.5rem 0;
  ${media.tablet`
    margin: 2.5rem 0;
  `};
`

export default BlogPosts
