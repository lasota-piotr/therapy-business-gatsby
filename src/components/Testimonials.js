import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import Observer from 'react-intersection-observer'
import Testimonial from './Testimonial'
import Container from './Container'
import LinkFeature from './LinkFeature'

const testimonials = [
  {
    text:
      '1Panią Ilonę cechuje profesjonalne podejście do pacjenta. Pomaga w' +
      'rozwiązywaniu problemów i "wyjściu na prostą". W gabinecie panuje' +
      'miła i sympatyczna atmosfera, co powoduje, że chętnie się tam' +
      'wraca.',
    author: 'Lidia1',
  },
  {
    text:
      '2Panią Ilonę cechuje profesjonalne podejście do pacjenta. Pomaga w' +
      'rozwiązywaniu problemów i "wyjściu na prostą". W gabinecie panuje' +
      'miła i sympatyczna atmosfera, co powoduje, że chętnie się tam' +
      'wraca.',
    author: 'Lidia2',
  },
  {
    text:
      '3Panią Ilonę cechuje profesjonalne podejście do pacjenta. Pomaga w' +
      'rozwiązywaniu problemów i "wyjściu na prostą". W gabinecie panuje' +
      'miła i sympatyczna atmosfera, co powoduje, że chętnie się tam' +
      'wraca.',
    author: 'Lidia3',
  },
  {
    text:
      '4Panią Ilonę cechuje profesjonalne podejście do pacjenta. Pomaga w' +
      'rozwiązywaniu problemów i "wyjściu na prostą". W gabinecie panuje' +
      'miła i sympatyczna atmosfera, co powoduje, że chętnie się tam' +
      'wraca.',
    author: 'Lidia4',
  },
]

class Testimonials extends Component {
  state = {
    currentIndex: 0,
  }

  onViewHandle = inView => {
    if (inView) {
      this.startScrolling()
    } else {
      this.stopScrolling()
    }
  }

  startScrolling = () => {
    this.counter = setInterval(() => {
      this.setState(({ currentIndex }) => ({
        currentIndex:
          currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0,
      }))
    }, 2000)
  }

  stopScrolling = () => {
    if (!this.counter) {
      return
    }
    clearInterval(this.counter)
    this.counter = null
  }

  componentWillUnmount() {
    this.stopScrolling()
  }

  render() {
    return (
      <Observer onChange={this.onViewHandle}>
        <TestimonialsWrapper>
          <TestimonialsContainer>
            <TestimonialsList
              testimonials={testimonials}
              currentIndex={this.state.currentIndex}
            />
          </TestimonialsContainer>
        </TestimonialsWrapper>
      </Observer>
    )
  }
}

const TestimonialsList = ({ testimonials, currentIndex }) =>
  testimonials.map(({ text, author }, i) => (
    <TestimonialsElementContainer
      key={i}
      index={i}
      currentIndex={currentIndex}
      maxIndex={testimonials.length - 1}
    >
      <Testimonial
        text={text}
        footerText={author}
        footerAside={<TestimonialsFooterAside />}
      />
    </TestimonialsElementContainer>
  ))

const TestimonialsFooterAside = () => (
  <Fragment>
    Źródło:{' '}
    <LinkFeature to="https://www.znanylekarz.pl/ilona-lasota/psycholog-psychoterapeuta/warszawa">
      znanylekarz.pl
    </LinkFeature>
  </Fragment>
)

const positionRight = css`
  transform: translate3d(100%, 0, 0);
`

const positionLeft = css`
  transform: translate3d(-100%, 0, 0);
`

const positionCenter = css`
  transform: translate3d(0, 0, 0);
`

const TestimonialsElementContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 1s;
  ${({ currentIndex, index, maxIndex }) => {
    if (index === currentIndex) {
      return positionCenter
    }
    if (
      index === currentIndex + 1 ||
      (currentIndex === maxIndex && index === 0)
    ) {
      return positionRight
    }
    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === maxIndex)
    ) {
      return positionLeft
    }

    return css`
      transform: translateX(200%);
      opacity: 0;
    `
  }};
`

const TestimonialsContainer = styled(Container)`
  position: relative;
  height: 100%;
`

const TestimonialsWrapper = styled.div`
  background-color: #fafafa;
  height: 28rem;
  padding: 6.5rem 0;
  margin: 2rem 0;
  overflow: hidden;
`
export default Testimonials
