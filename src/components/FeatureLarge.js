import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { between } from 'polished'
import PropTypes from 'prop-types'
import media from '../styleUtils/media'
import Container from './Container'

const FeatureLarge = ({ children, ...restProps }) => {
  return (
    <FeatureLargeWrapper {...restProps}>
      <Container>
        <FeatureLargeContainer>{children}</FeatureLargeContainer>
      </Container>
    </FeatureLargeWrapper>
  )
}

const FeatureLargeWrapper = styled.section`
  margin-bottom: 6.5rem;
  padding: 2rem 0;

  ${media.tablet`
    margin-bottom: 3rem;
  `};
`

const FeatureLargeContainer = styled.article`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  ${media.tablet`
    grid-template-columns: 1fr;
    max-width: 510px;
  `};
  grid-gap: 2rem;
`

const FeatureLargeContent = styled.div`
  padding: 0 2rem;
  ${media.tablet`
    ${({ order }) =>
      order === 'changed'
        ? css`
            order: 1;
          `
        : ''};
    padding: 0;
  `};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

FeatureLargeContent.propTypes = {
  order: PropTypes.oneOf(['normal', 'changed']),
}

FeatureLargeContent.defaultProps = {
  order: 'changed',
}

const FeatureLargeHeader = styled.h3`
  font-size: ${between('23px', '33px')};
  line-height: 1.36;
  margin-bottom: 2rem;
`

const FeatureLargeBody = styled.div`
  font-size: ${between('17px', '19px')};
  line-height: 1.68;
  color: #808080;
  margin-bottom: 2rem;
`

const FeatureLargeImgContent = styled(Img)`
  border-radius: 6px;
`

const FeatureLargeImgWrapper = styled.div`
  width: 100%;
`

const FeatureLargeImg = props => (
  <FeatureLargeImgWrapper>
    <FeatureLargeImgContent {...props} />
  </FeatureLargeImgWrapper>
)

FeatureLarge.Content = FeatureLargeContent
FeatureLarge.Header = FeatureLargeHeader
FeatureLarge.Body = FeatureLargeBody
FeatureLarge.Img = FeatureLargeImg

export default FeatureLarge
