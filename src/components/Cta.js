import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'
import Container from './Container'

const Cta = ({children, restProps}) => {
  return (
    <Container {...restProps}>
      <CtaWrapper>
        {children}
      </CtaWrapper>
    </Container>
  )
}

const CtaHead = styled.h3`
  text-align: center;
  font-size: ${between('23px', '33px')};
  margin-bottom: ${between('16px', '24px')};
  color: #252525;
`

const CtaText = styled.p`
  text-align: center;
  font-size: ${between('16px', '19px')};
  color: #808080;
  margin-bottom: ${between('16px', '24px')};
`

const CtaWrapper = styled.section`
  margin: 5.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 66.66%;
  ${media.tablet`
    max-width: 83.33%;
  `};
  ${media.phone`
    max-width: 100%;
  `};
`

Cta.Head = CtaHead
Cta.Text = CtaText

export default Cta
