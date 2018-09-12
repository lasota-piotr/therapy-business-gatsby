import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import LinkPlain from './LinkPlain'

const BlogPostAuthor = ({ avatar }) => {
  return (
    <BlogPostAuthorWrapper>
      <LinkPlain to="/o-mnie">
        <BlogPostAuthorImage
          fixed={avatar}
          alt="Psycholog, Psychoterapeuta Ilona Lasota - Warszawa, Włochy"
        />
      </LinkPlain>
      <BlogPostAuthorBody>
        <LinkPlain to="/o-mnie">
          <BlogPostAuthorTitle>Ilona Lasota</BlogPostAuthorTitle>
          <BlogPostAuthorDescription>
            Psycholog, psychoterapeuta
          </BlogPostAuthorDescription>
        </LinkPlain>
      </BlogPostAuthorBody>
    </BlogPostAuthorWrapper>
  )
}

const BlogPostAuthorImage = styled(Img)`
  border-radius: 50%;
`

const BlogPostAuthorWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const BlogPostAuthorBody = styled.div`
  margin-left: 1rem;
`

const BlogPostAuthorTitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0.25rem;
`

const BlogPostAuthorDescription = styled.p`
  font-size: 13px;
  margin-bottom: 0;
`

export default BlogPostAuthor
