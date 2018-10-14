import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import heroImage from '../assets/a-day-at-the-park.svg'
import media from '../styleUtils/media'
import Button from './Button'
import LinkPlain from './LinkPlain'

const MainHero = () => {
  return (
    <MainHeroContainer>
      <MainHeroContent>
        <MainHeroTitle>Otwórz się na zmianę</MainHeroTitle>
        <MainHeroSubTitle>
          Ilona Lasota - Psycholog Psychoterapeuta poznawczo-behawioralny
          <br />
          Psychoterapia osób dorosłych, młodzieży i par
        </MainHeroSubTitle>
        <div>
          <LinkPlain to="/kontakt">
            <Button px={4} py={3} fontWeight="bolder">
              Umów się na wizytę
            </Button>
          </LinkPlain>
        </div>
      </MainHeroContent>

      <MainHeroImg>
        <img
          src={heroImage}
          alt="psycholog psychoterapeuta Warszawa Włochy Urus"
        />
      </MainHeroImg>
    </MainHeroContainer>
  )
}

const MainHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 7.5rem;
  max-width: 500px;
`

const MainHeroTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  margin-right: 2rem;
  margin-bottom: 2rem;
  ${media.desktop`
    padding-top: 2rem;
    font-size: ${between('40px', '48px')};
    margin-right: 0;
  `};
`

const MainHeroSubTitle = styled.h2`
  font-size: 20px;
  color: #777;
  margin-right: 2rem;
  padding-bottom: 2rem;
  ${media.desktop`
    font-size: ${between('17px', '20px')};
    margin-right: 0;
  `};
`

const MainHeroImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6rem;
  width: 70%;
  ${media.desktop`
    width: 80%;
  `};
`

const MainHeroContainer = styled.section`
  height: 100vh;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  padding: 2.5rem;
  ${media.desktop`
    height: initial;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  `};
`

export default MainHero
