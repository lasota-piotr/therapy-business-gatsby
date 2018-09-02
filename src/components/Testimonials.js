import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import media from '../styleUtils/media'
import Blockquote from './Blockquote'
import Container from './Container'
import LinkFeature from './LinkFeature'

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <Container>
        <Testimonial>
          <TestimonialText>
            "Panią Ilonę cechuje profesjonalne podejście do pacjenta. Pomaga w
            rozwiązywaniu problemów i "wyjściu na prostą". W gabinecie panuje
            miła i sympatyczna atmosfera, co powoduje, że chętnie się tam
            wraca."
          </TestimonialText>
          <TestimonialFooter>Lidia</TestimonialFooter>

          <TestimonialFooterAside>
            Źródło:{' '}
            <LinkFeature to="https://www.znanylekarz.pl/ilona-lasota/psycholog-psychoterapeuta/warszawa">
              znanylekarz.pl
            </LinkFeature>
          </TestimonialFooterAside>
        </Testimonial>
      </Container>
    </TestimonialsWrapper>
  )
}

const Testimonial = styled.div`
  margin: 0 auto;
  max-width: 66.66%;
  text-align: center;
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
  margin-bottom: 1.5rem;
`

const TestimonialFooterAside = styled.span`
  display: block;
  font-size: calc(10.64px + 0.11vw);
`

export default Testimonials
