import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import Observer from 'react-intersection-observer'
import Testimonial from './Testimonial'
import Container from './Container'
import LinkFeature from './LinkFeature'

class Testimonials extends Component {
  state = {
    currentIndex: 0,
    prevIndex: -1,
  }

  onViewHandle = inView => {
    if (inView) {
      this.startScrolling()
    } else {
      this.stopScrolling()
    }
  }

  startScrolling = () => {
    const { testimonials } = this.props
    this.counter = setInterval(() => {
      this.setState(({ currentIndex }) => ({
        prevIndex: currentIndex,
        currentIndex:
          currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0,
      }))
    }, 5000)
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

  onNavButtonClick = buttonIndex => {
    this.setState({
      currentIndex: buttonIndex,
    })
  }

  render() {
    const { testimonials } = this.props
    const { currentIndex, prevIndex } = this.state
    return (
      <Observer onChange={this.onViewHandle}>
        <TestimonialsWrapper>
          <TestimonialsContainer>
            <TestimonialsList
              testimonials={testimonials}
              currentIndex={currentIndex}
              prevIndex={prevIndex}
            />
            <TestimonialsNavigation
              currentIndex={currentIndex}
              totalNumber={testimonials.length}
              onNavButtonClick={this.onNavButtonClick}
            />
          </TestimonialsContainer>
        </TestimonialsWrapper>
      </Observer>
    )
  }
}

const TestimonialsList = ({ testimonials, currentIndex, prevIndex }) =>
  testimonials.map(
    (
      {
        node: {
          id,
          testimonial: { testimonial },
          author,
        },
      },
      i
    ) => (
      <TestimonialsElementContainer
        key={id}
        index={i}
        currentIndex={currentIndex}
        maxIndex={testimonials.length - 1}
        prevIndex={prevIndex}
      >
        <Testimonial
          text={testimonial}
          footerText={author}
          footerAside={<TestimonialsFooterAside />}
        />
      </TestimonialsElementContainer>
    )
  )

const TestimonialsFooterAside = () => (
  <Fragment>
    Źródło:{' '}
    <LinkFeature to="https://www.znanylekarz.pl/ilona-lasota/psycholog-psychoterapeuta/warszawa">
      znanylekarz.pl
    </LinkFeature>
  </Fragment>
)

const TestimonialsNavigation = ({
  totalNumber,
  currentIndex,
  onNavButtonClick,
}) => {
  const icons = Array(totalNumber).fill('')
  return (
    <TestimonialsNavigationContainer>
      {icons.map((icon, i) => (
        <TestimonialsNavigationIcon
          key={i}
          isActive={i === currentIndex}
          onClick={() => onNavButtonClick(i)}
        />
      ))}
    </TestimonialsNavigationContainer>
  )
}

const TestimonialsNavigationContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const TestimonialsNavigationIcon = styled.button`
  transition: background-color 1s;
  background-color: ${({ isActive }) => (isActive ? '#252525' : '#aeaeae')};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 1rem 0.5rem;
  border: 0;
  padding: 0;
`

const positionRight = css`
  transform: translate3d(100%, 0, 0);
  opacity: 0;
`

const positionLeft = css`
  transform: translate3d(-100%, 0, 0);
`

const positionCenter = css`
  transform: translate3d(0, 0, 0);
  opacity: 1;
`

const TestimonialsElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.5s;
  ${({ currentIndex, prevIndex, index, maxIndex }) => {
    if (index === currentIndex) {
      return positionCenter
    }
    if (
      index === currentIndex + 1 ||
      (currentIndex === maxIndex && index === 0)
    ) {
      return css`
        ${positionRight};
      `
    }
    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === maxIndex)
    ) {
      return css`
        ${positionLeft};
        ${(() => {
          console.log({
            maxIndex,
            currentIndex,
            prevIndex,
            roznica: currentIndex - prevIndex,
          })
        })()};
        ${currentIndex - prevIndex === 1 ||
        currentIndex - prevIndex === -maxIndex
          ? 'opacity: 1'
          : 'opacity: 0'};
      `
    }

    return css`
      transform: translateX(${index < currentIndex ? '200%' : '200%'});
      opacity: 0;
    `
  }};
`

const TestimonialsContainer = styled(Container)`
  position: relative;
  height: 28rem;
`

const TestimonialsWrapper = styled.div`
  background-color: #fafafa;
  margin: 2rem 0;
  padding: 1rem 0;
  overflow: hidden;
`
export default Testimonials
