import React from 'react'
import styled from 'styled-components'

const MainTestimonial = () => {
  return (
    <MainTestimonialContainer>
      <div>Jan</div>
      <div>
        Jestem psychologiem i psychoterapeutą poznawczo‑behawioralnym w trakcie
        procesu certyfikacji. W swojej pracy terapeutycznej posługuję się
        głównie podejściem poznawczo‑behawioralnym oraz terapią schematu.
      </div>
    </MainTestimonialContainer>
  )
}

const MainTestimonialContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  margin: 2rem 0.5rem;
  padding: 1.5rem;
  display: inline-flex;
  flex-direction: column;
  white-space: initial;
  width: 280px;
  
  &:first-child {
    margin-left: 1rem;
  }
  
  &:last-child {
    margin-right: 1rem;
  }
`

export default MainTestimonial
