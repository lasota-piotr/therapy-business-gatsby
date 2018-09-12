import styled from 'styled-components'
import media from '../styleUtils/media'

const BlogPostBody = styled.div`
  p {
    color: #333;
    margin-top: 1.75rem;
    margin-bottom: 0;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 21px;
    line-height: 1.58;
    ${media.tablet`
      font-size: 18px;
      margin-top: 1.25rem;
  `};
  }
  
  strong {
    font-weight: 700;
  }
`

export default BlogPostBody
