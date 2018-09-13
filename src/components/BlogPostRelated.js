import React from 'react'
import styled, { css } from 'styled-components'
import Container from './Container'
import LinkPlain from './LinkPlain'

const BlogPostRelated = ({ next, previous }) => {
  return (
    <BlogPostRelatedWrapper>
      <Container>
        <BlogPostRelatedList>
          {previous && (
            <li>
              <LinkPlain to={'/' + previous.slug} rel="prev">
                ← {previous.title}
              </LinkPlain>
            </li>
          )}

          {next && (
            <BlogPostRelatedElementRight>
              <LinkPlain to={'/' + next.slug} rel="next">
                {next.title} →
              </LinkPlain>
            </BlogPostRelatedElementRight>
          )}
        </BlogPostRelatedList>
      </Container>
    </BlogPostRelatedWrapper>
  )
}

const BlogPostRelatedWrapper = styled.div`
  border-top: 1px solid #ebebeb;
  background-color: #fafafa;
  padding: 6.5rem 1rem;
  margin: 2rem 0 0;
`

const BlogPostRelatedList = styled.ul`
  list-style: none;
  display: flex;
`

const BlogPostRelatedElementRight = styled.li`
  margin-left: auto;
`

export default BlogPostRelated
