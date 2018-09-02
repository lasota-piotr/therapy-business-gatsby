import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'
import Container from './Container'

const Masthead = ({children, restProps}) => {
  return (
    <Container {...restProps}>
      <MastheadWrapper>
        {children}
      </MastheadWrapper>
    </Container>
  )
}

const MastheadHead = styled.h1`
  text-align: center;
  font-size: ${between('40px', '44px')};
  margin-bottom: ${between('16px', '24px')};
  color: #252525;
`

const MastheadText = styled.p`
  text-align: center;
  font-size: ${between('16px', '19px')};
  color: #808080;
  margin-bottom: ${between('16px', '24px')};
`

const MastheadWrapper = styled.section`
  margin: 5.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  ${media.desktop`
    max-width: 66.66%;
  `};
  ${media.tablet`

    max-width: 83.33%;
  `};
  ${media.phone`
    max-width: 100%;
  `};
`

Masthead.Head = MastheadHead
Masthead.Text = MastheadText

export default Masthead
