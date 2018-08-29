import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'
import Blockquote from './Blockquote'
import Container from './Container'

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <Container>
        <Testimonial>
          <TestimonialText>
            “We’ve been using Stack to prototype designs quickly and
            efficiently. Needless to say we’re hugely impressed by the style and
            value.”
          </TestimonialText>
          <TestimonialFooter>Maguerite Holland</TestimonialFooter>
        </Testimonial>
      </Container>
    </TestimonialsWrapper>
  )
}

const Testimonial = styled.div`
  margin: 0 auto;
  max-width: 66.66%;
  ${media.tablet`
    max-width: 83.33%;
  `};
  ${media.phone`
    max-width: 100%;
  `};
`

const TestimonialsWrapper = styled.div`
  background-color: #fafafa;
  padding: 6.5rem 1rem;
  margin: 2rem 0;
`

const TestimonialText = styled(Blockquote)`
  color: #666;
  font-size: ${between('22px', '25px')};
  text-align: center;
  margin-bottom: 2rem;
`

const TestimonialFooter = styled.span`
  font-size: ${between('13px', '14px')};
  font-weight: 500;
  text-align: center;
  display: block;
`

export default Testimonials
