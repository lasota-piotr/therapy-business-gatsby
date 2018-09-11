import styled from 'styled-components'

const BlogPostContent = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 20px;
    line-height: 1.58;
  }
  
  strong {
    font-weight: 700;
  }
`

export default BlogPostContent
