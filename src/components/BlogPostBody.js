import styled from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'

const BlogPostBody = styled.div`
  p {
    color: #333;
    margin-bottom: 1.75rem;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 20px;
    line-height: 1.58;
    ${media.tablet`
      font-size: ${between('16.8px', '18px', '280px', '1000px')};
      margin-top: 1.25rem;
    `};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  strong {
    font-weight: 700;
  }
`

export default BlogPostBody
