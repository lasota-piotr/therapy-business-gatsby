import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import Link from './Link'
import Container from './Container'

const Features = () => {
  return (
    <FeaturesWrapper>
      <Container>
        <FeaturesContainer>
          <Feature>
            <FeatureHeader>Mailer Integrations</FeatureHeader>
            <FeatureBody>
              Stack comes with integration for Mail Chimp and Campaign Monitor
              forms - ideal for modern marketing campaigns
            </FeatureBody>
            <FeatureLink>Dowiedz się więcej</FeatureLink>
          </Feature>
          <Feature>
            <FeatureHeader>Mailer Integrations</FeatureHeader>
            <FeatureBody>
              Stack comes with integration for Mail Chimp and Campaign Monitor
              forms - ideal for modern marketing campaigns
            </FeatureBody>
            <FeatureLink>Dowiedz się więcej</FeatureLink>
          </Feature>
          <Feature>
            <FeatureHeader>Mailer Integrations</FeatureHeader>
            <FeatureBody>
              Stack comes with integration for Mail Chimp and Campaign Monitor
              forms - ideal for modern marketing campaigns
            </FeatureBody>
            <FeatureLink>Dowiedz się więcej</FeatureLink>
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

const FeatureLink = styled(Link)`
  font-weight: 700;
  font-size: ${between('11px', '12px')};
`

const FeaturesWrapper = styled.section`
  margin-bottom: 6.5rem;
`

export default Features
