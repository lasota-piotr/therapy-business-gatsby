import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import get from 'lodash/get'
import Link from './Link'

const BlogCard = ({ data }) => {
  const title = get(data, 'frontmatter.title') || data.fields.slug
  const fluid = get(data, 'frontmatter.image.childImageSharp.fluid')

  return (
    <BlogCardWrapper>
      {fluid && (
        <Link to={data.fields.slug}>
          <BlogCardImg fluid={fluid} />
        </Link>
      )}
      <BlogCardBody>
        <small>{data.frontmatter.date}</small>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
        <Link to={data.fields.slug}>Czytaj dalej</Link>
      </BlogCardBody>
    </BlogCardWrapper>
  )
}

const BlogCardImg = styled(Img)`
  border-radius: 6px 6px 0 0;

  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.3s ease;
  }
  &:hover {
    &:after {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`

const BlogCardBody = styled.div`
  padding: 2rem;
  border-radius: 0 0 6px 6px;
  border: 1px solid #ececec;
  height: 100%;
`

const BlogCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 510px;
`

export default BlogCard
