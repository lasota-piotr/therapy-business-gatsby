import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BlogCard from './BlogCard'
import Container from './Container'

const LatestBlogPosts = ({ posts }) => {
  return (
    <LatestBlogPostsWrapper>
      <Container>
        <LatestBlogPostsContainer>
          {posts.map(({ node }) => (
            <BlogCard key={node.slug} data={node} />
          ))}
        </LatestBlogPostsContainer>
      </Container>
    </LatestBlogPostsWrapper>
  )
}

const LatestBlogPostsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
`

const LatestBlogPostsWrapper = styled.section`
  margin: 6.5rem 0;
`

export default LatestBlogPosts
