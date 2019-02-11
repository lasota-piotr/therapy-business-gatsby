import React from 'react'
import styled from 'styled-components'
import between from 'polished/lib/mixins/between'
import PropTypes from 'prop-types'
import Blockquote from './Blockquote'
import PageWrapper from './PageWrapper'

const Testimonial = ({ text, footerText, footerAside, children }) => {
  return (
    <PageWrapper>
      <TestimonialText>{text}</TestimonialText>
      {!!footerText && <TestimonialFooter>{footerText}</TestimonialFooter>}
      <TestimonialFooterAside>{footerAside}</TestimonialFooterAside>
      {children}
    </PageWrapper>
  )
}

Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  footerText: PropTypes.string,
}

const TestimonialText = styled(Blockquote)`
  color: #666;
  font-size: ${between('19px', '25px')};
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

export default Testimonial
