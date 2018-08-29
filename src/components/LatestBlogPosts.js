import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BlogCard from './BlogCard'
import Container from './Container'

const LatestBlogPosts = ({ posts }) => {
  return (
    <section>
      <Container>
        <LatestBlogPostsContainer>
          {posts.map(({ node }) => (
            <BlogCard key={node.fields.slug} data={node} />
          ))}
        </LatestBlogPostsContainer>
      </Container>
    </section>
  )
}

const LatestBlogPostsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
`

export default LatestBlogPosts
