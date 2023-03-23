import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import { Link } from 'gatsby'
import house from '../assets/house.svg'
import brainstorming from '../assets/brainstoriming.svg'
import together from '../assets/together.svg'
import Container from './Container'
import Button from './Button'

const Pricing = () => {
  return (
    <PricingWrapper>
      <Container>
        <PricingContainer>
          <PricingElement>
            <PricingContent>
              <PricingImage src={brainstorming} alt="Psychoterapia indywidualna" />
              <PricingElementHeader>
                Psychoterapia indywidualna / konsultacja
              </PricingElementHeader>
              <PricingElementSubHeader>220 zł</PricingElementSubHeader>
              <PricingElementSmall>sesja 50 min</PricingElementSmall>
            </PricingContent>
            <PricingButton>Zarezewuj wizytę</PricingButton>
          </PricingElement>
          <PricingElement>
            <PricingContent>
              <PricingImage src={together} alt="Psychoterapia par" />
              <PricingElementHeader>
                Pschoterapia pary / konsultacja
              </PricingElementHeader>
              <PricingElementSubHeader>320 zł</PricingElementSubHeader>
              <PricingElementSmall>sesja 80 min</PricingElementSmall>
            </PricingContent>
            <PricingButton>Zarezewuj wizytę</PricingButton>
          </PricingElement>
        </PricingContainer>
      </Container>
    </PricingWrapper>
  )
}

const PricingContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: stretch;
`

const PricingButtonContent = styled(Button)`
  border-radius: 0;
  width: 100%;
`

const PricingImageContent = styled.img`
  display: block;
  max-height: 7rem;
  max-width: 9rem;
`

const PricingImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  margin: 0 auto 2rem;
`

const PricingImage = props => (
  <PricingImageWrapper>
    <PricingImageContent {...props} />
  </PricingImageWrapper>
)

const PricingButton = ({ children, ...restProps }) => (
  <Link to="/kontakt" {...restProps}>
    <PricingButtonContent px={4} py={3}>
      {children}
    </PricingButtonContent>
  </Link>
)

const PricingElement = styled.div`
  border-radius: 6px;
  border: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  max-width: 510px;
  overflow: hidden;
`

const PricingContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PricingElementSubHeader = styled.strong`
  font-weight: 500;
  font-size: ${between('27px', '33px')};
  line-height: 1.36;
  margin-bottom: 0.75rem;
`

const PricingElementHeader = styled.h2`
  font-size: ${between('20px', '25px')};
  line-height: 1.5;
  min-height: 7rem;
`

const PricingElementSmall = styled.span`
  font-size: 12px;
  line-height: 2.16;
  color: #666;
`

const PricingWrapper = styled.section`
  margin-bottom: 6.5rem;
`

export default Pricing
