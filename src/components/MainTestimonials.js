import React from 'react'
import styled from 'styled-components'
import MainTestimonial from './MainTestimonial'

const MainTestimonials = () => {
  return (
    <MainTestimonialsContainer>
      <MainTestimonial />
      <MainTestimonial />
      <MainTestimonial />
    </MainTestimonialsContainer>
  )
}

const MainTestimonialsContainer = styled.section`
  overflow-y: hidden;
  white-space: nowrap;
  //display: grid;
  //grid-auto-flow: column;
  //grid-gap: 1rem;
`

// const MainTestimonialsWrapper = styled.div`
// overflow-y: hidden;

//`

export default MainTestimonials
