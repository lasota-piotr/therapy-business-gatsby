import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { between } from 'polished'
import PropTypes from 'prop-types'
import media from '../styleUtils/media'
import Button from './Button'

const Hero = ({
  headerText,
  subHeaderText,
  contentChildren,
  imageFluid,
  color,
  position,
  size,
  ...restProps
}) => {
  const settingsProps = {
    color,
    position,
    size,
  }
  return (
    <HeroContainer {...settingsProps} {...restProps}>
      <HeroContent {...settingsProps}>
        <HeroHeader {...settingsProps}>{headerText}</HeroHeader>
        <HeroSubHeader {...settingsProps}>{subHeaderText}</HeroSubHeader>
        {contentChildren}
      </HeroContent>
      <HeroImg {...settingsProps} fluid={imageFluid}>
        text
      </HeroImg>
    </HeroContainer>
  )
}

Hero.propTypes = {
  imageFluid: PropTypes.object.isRequired,
  position: PropTypes.oneOf(['left', 'center']),
  color: PropTypes.oneOf(['dark']),
  size: PropTypes.oneOf(['large', 'normal']),
}

Hero.defaultProps = {
  position: 'center',
  color: 'dark',
  size: 'normal',
}

const HeroContainer = styled.section`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${({ color, position }) => {
      if (color === 'dark' && position === 'center') return heroContentDark
      if (color === 'dark' && position === 'left') return heroContentLeftDark
      return ''
    }};
  }
`

const HeroImg = styled(Img)`
  ${({ size }) =>
    size === 'large'
      ? css`
          max-height: 80vh;
          min-height: 80vh;
        `
      : css`
          max-height: 600px;
          min-height: 400px;
        `};
`

const HeroSubHeader = styled.p`
  color: #fff;
  font-size: ${between('17px', '19px')};
  line-height: 1.68;
  ${({ position }) =>
    position === 'center' &&
    css`
      text-align: center;
    `};
  padding-bottom: 1rem;
`

const HeroHeader = styled.h2`
  font-weight: 300;
  font-variant-ligatures: common-ligatures;
  letter-spacing: -0.01em;
  font-size: ${between('35px', '44px')};
  line-height: 1.3838;
  ${({ position }) =>
    position === 'center' &&
    css`
      text-align: center;
    `};
`

const heroContentCenterStyles = css`
  align-items: center;
  margin: auto;
`

const heroContentLeftStyles = css`
  align-items: flex-start;
  width: 50%;
  max-width: 600px;
`

const heroContentLeftDark = css`
  background: rgb(37, 37, 37, 0.6);
  background: linear-gradient(
    90deg,
    rgba(37, 37, 37, 0.7) 0%,
    rgba(37, 37, 37, 0.4) 25%,
    rgba(37, 37, 37, 0.1) 62%,
    rgba(37, 37, 37, 0) 100%
  );
  ${media.tablet`
    background: rgb(37, 37, 37, 0.6);
  `};
`

const heroContentDark = css`
  background: rgb(37, 37, 37, 0.6);
`

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  max-width: 750px;
  ${({ position }) => {
    if (position === 'center') return heroContentCenterStyles
    if (position === 'left') return heroContentLeftStyles
    return ''
  }};
  color: #fff;
  ${media.tablet`
    width: 100%;
    padding: 1rem;
  `};
`

export default Hero
