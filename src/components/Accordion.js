import React from 'react'

import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import './Accordion.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import media from '../styleUtils/media'
import Container from './Container'

const Accordion = ({ imageFluid }) => {
  return (
    <section>
      <Container>
        <AccordionContainer>
          <Img fluid={imageFluid} />
          <AccordionContent>
            <AccordionComponent>
              <AccordionItem>
                <AccordionItemTitle>
                  <AccordionHeader>
                    Psychoterapia
                    <div className="accordion__arrow" role="presentation" />
                  </AccordionHeader>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Psychoterapia jest jedną z najbardziej powszechnych i
                    najskuteczniejszych metod pomocy psychologicznej. Jest to
                    proces, w trakcie którego, dzięki naukowo sprawdzonym
                    technikom, możemy odkryć przyczyny swoich stanów
                    emocjonalnych, odczuć, zachowań i mamy szansę na ich zmianę.
                    Uczymy się nowych, korzystnych dla siebie zachowań,
                    budowania relacji, radzenia sobie ze stresem.
                  </p>
                  <p>
                    Motywem do podjęcia terapii może być chęć poprawy zdolności
                    do budowania głębszych relacji i pełniejszego wykorzystania
                    własnych możliwości. Za pomocą terapii możemy poprawić
                    jakość swojego życia emocjonalnego, zbudować poczucie
                    wartości ,poprawić komunikację i relacje z ludźmi.
                  </p>
                  <p>
                    Psychoterapia pomaga ludziom w różnym wieku wieść
                    szczęśliwsze, zdrowsze i bardziej satysfakcjonujące życie.
                  </p>
                  <p>
                    Podczas terapii możemy nie tylko rozwiązać bieżące problemy
                    ale również mamy szansę nauczyć się nowych umiejętności,
                    które pozwolą nam lepiej radzić sobie z możliwymi
                    trudnościami w przyszłości.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <AccordionHeader>
                    Terapia par
                    <div className="accordion__arrow" role="presentation" />
                  </AccordionHeader>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Celem terapii par jest obopólna poprawa zadowolenia z
                    jakości związku. Jest przeznaczona dla par, które
                    doświadczają problemów w związku. Mają trudności z
                    komunikacją, nie mogą dojść do porozumienia. Terapia par
                    polega przede wszystkim na rozpoznaniu problemu, poprawie
                    komunikacji między parterami oraz pomocy osiągnięciu
                    porozumienia, które umożliwi zaspokojenie potrzeb obu stron.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </AccordionComponent>
          </AccordionContent>
        </AccordionContainer>
      </Container>
    </section>
  )
}

const AccordionHeader = styled.h3`
  font-size: 14px;
  font-weight: 600;
  position: relative;
`

const AccordionContent = styled.div`
  ${media.tablet`
    order: -1;
  `};
`

const AccordionContainer = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  ${media.tablet`
    grid-template-columns: 1fr;
  `};
  grid-gap: 2rem;
  justify-items: stretch;
`

export default Accordion
