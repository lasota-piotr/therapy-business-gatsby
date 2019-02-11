import styled from 'styled-components'
import media from '../styleUtils/media'

const PageWrapper = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  max-width: 66.66%;
  ${media.tablet`
    max-width: 83.33%;
  `};
  ${media.phone`
    max-width: 100%;
  `};
`

export default PageWrapper
