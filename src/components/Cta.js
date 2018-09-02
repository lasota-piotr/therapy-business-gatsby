import React from 'react'
import styled, { css } from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'
import Container from './Container'

const Cta = ({ children, ...restProps }) => {
  return (
    <CtaWrapper {...restProps}>
      <Container>
        <CtaContainer>{children}</CtaContainer>
      </Container>
    </CtaWrapper>
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
const CtaWrapper = styled.div`
  ${({ withBackground }) =>
    withBackground
      ? css`
          background-color: #fafafa;
          padding: 6.5rem 1rem;
          margin: 2rem 0;
        `
      : css`
          padding: 0 1rem;
          margin: 5.5rem 0;
        `};
`

const CtaContainer = styled.section`
  margin: 0 auto;
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
