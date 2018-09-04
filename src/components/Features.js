import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import LinkFeature from './LinkFeature'
import Container from './Container'

const Features = () => {
  return (
    <FeaturesWrapper>
      <Container>
        <FeaturesContainer>
          <Feature>
            <FeatureHeader>Psychoterapia</FeatureHeader>
            <FeatureBody>
              Psychoterapia jest jedną z najbardziej powszechnych i
              najskuteczniejszych metod pomocy psychologicznej.
            </FeatureBody>
            <LinkFeature to="/wiedza#psychoterapia">
              Dowiedz się więcej
            </LinkFeature>
          </Feature>
          <Feature>
            <FeatureHeader>Terapia par</FeatureHeader>
            <FeatureBody>
              Celem terapii par jest obopólna poprawa zadowolenia z jakości
              związku.
            </FeatureBody>
            <LinkFeature to="/wiedza#terapia-par">
              Dowiedz się więcej
            </LinkFeature>
          </Feature>
          <Feature>
            <FeatureHeader>Terapia poznawczo&#8209;behawioralna</FeatureHeader>
            <FeatureBody>
              Terapia poznawczo-behawioralna opiera się na założeniu, że emocje
              i zachowanie powstają pod wpływem sposobu w jaki interpretujemy
              zdarzenia.
            </FeatureBody>
            <LinkFeature to="/wiedza#terapia-poznawczo-behawioralna">
              Dowiedz się więcej
            </LinkFeature>
          </Feature>
        </FeaturesContainer>
      </Container>
    </FeaturesWrapper>
  )
}

const FeaturesContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
`

const Feature = styled.div`
  border-radius: 3px;
  border: 1px solid #ececec;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 510px;
`

const FeatureHeader = styled.h4`
  font-size: ${between('17px', '19px')};
  text-align: center;
`

const FeatureBody = styled.p`
  font-size: ${between('13px', '14px')};
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
