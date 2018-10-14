import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { between } from 'polished'
import togetherSvg from '../assets/together.svg'
import youngSvg from '../assets/young.svg'
import brainstormingSvg from '../assets/brainstoriming.svg'
import Container from './Container'

const Features = ({ type }) => {
  return (
    <FeaturesWrapper>
      <Container>
        <FeaturesContainer>
          <Feature type={type}>
            <FeatureImg src={brainstormingSvg} alt="Terapia indywidualna" />
            <FeatureHeader>Terapia indywidualna</FeatureHeader>
            <FeatureBody>
              Dzięki terapii indywidualnej można lepiej poznać i zrozumieć
              samego siebie.
            </FeatureBody>
          </Feature>
          <Feature type={type}>
            <FeatureImg src={togetherSvg} alt="Terapia par i małżeństw" />
            <FeatureHeader>Terapia par&#8239;i&#8239;małżeństw</FeatureHeader>
            <FeatureBody>
              Celem terapii par jest obopólna poprawa zadowolenia z jakości
              związku.
            </FeatureBody>
          </Feature>
          <Feature type={type}>
            <FeatureImg src={youngSvg} alt="Terapia młodzieży" />
            <FeatureHeader>Terapia młodzieży</FeatureHeader>
            <FeatureBody>
              Psychoterapia nastolatka pomaga wprowadzić konstruktywne zmiany w
              coraz bardziej dorosłym życiu.
            </FeatureBody>
          </Feature>
        </FeaturesContainer>
      </Container>
    </FeaturesWrapper>
  )
}

Features.defaultProps = {
  type: 'normal',
}

Features.propTypes = {
  type: PropTypes.oneOf(['normal', 'plain']),
}

const FeaturesContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
`

const FeatureImgContainer = styled.div`
  height: 7.25rem;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FeatureImgContent = styled.img`
  max-height: 100%;
  max-width: 65%;
`

const FeatureImg = props => (
  <FeatureImgContainer>
    <FeatureImgContent {...props} />
  </FeatureImgContainer>
)

const Feature = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 510px;
  ${({ type }) =>
    type !== 'plain' &&
    css`
      border-radius: 3px;
      border: 1px solid #ececec;
    `};
`

const FeatureHeader = styled.h4`
  font-size: ${between('18px', '20px')};
  font-weight: 400;
  text-align: center;
`

const FeatureBody = styled.p`
  font-size: ${between('15px', '16px')};
  color: #666;
  max-width: 22em;
  text-align: center;
  line-height: 1.85;
  margin-bottom: 2.25rem;
`

const FeaturesWrapper = styled.section`
  margin-bottom: 6.5rem;
`

export default Features
