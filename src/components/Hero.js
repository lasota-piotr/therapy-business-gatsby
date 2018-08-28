import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'
import Button from './Button'

const Hero = ({ imageFluid }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroHeader>Build Something Brilliant.</HeroHeader>
        <HeroSubHeader>
          Build lean, beautiful websites with a clean and contemporary look to
          suit a range of purposes.
        </HeroSubHeader>
        <Button px={4} py={3}>
          Dowiedz się więcej
        </Button>
      </HeroContent>
      <HeroImg fluid={imageFluid}>text</HeroImg>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  position: relative;
`

const HeroImg = styled(Img)`
  max-height: 600px;
  min-height: 400px;
`

const HeroSubHeader = styled.p`
  color: #fff;
  font-size: ${between('17px', '19px')};
  line-height: 1.68;
  text-align: center;
  padding-bottom: 1rem;
`

const HeroHeader = styled.h2`
  font-weight: 300;
  font-variant-ligatures: common-ligatures;
  letter-spacing: -0.01em;
  font-size: ${between('25px', '44px')};
  line-height: 1.3838;
  text-align: center;
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
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 7% 10% 10%;
  ${media.tablet`
    padding: 5%;
  `};
  background-color: rgba(0, 0, 0, 0.6);
`

export default Hero
