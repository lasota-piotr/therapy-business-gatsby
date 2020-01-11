import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { between } from 'polished'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Button from '../components/Button'
import FeatureLarge from '../components/FeatureLarge'
import Cta from '../components/Cta'
import graduation from '../assets/graduation.svg'
import ether from '../assets/ether.svg'
import highFive from '../assets/high-five.svg'
import Hero from '../components/Hero'
import { TITLE_SUFFIX } from '../constants/constants'
import Link from '../components/Link'
import Masthead from '../components/Masthead'

const TITLE = 'O mnie'

class AboutPage extends Component {
  // TODO: move it to render props
  scrollElementRef = React.createRef()
  handleScrollToElement = () => {
    window.scrollTo({
      top: this.scrollElementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  render() {
    const { data, location } = this.props
    const siteDescription = get(data, 'site.siteMetadata.description')
    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${TITLE} | ${TITLE_SUFFIX}`}
        />
        <AboutHero
          imageFluid={data.heroImage.childImageSharp.fluid}
          position="left"
          size="large"
          headerText="Ilona Lasota"
          subHeaderText="Psycholog i psychoterapeuta poznawczo&#8209;behawioralny"
          contentChildren={
            <Button px={4} py={3} onClick={this.handleScrollToElement}>
              Dowiedz się więcej
            </Button>
          }
          alt="Ilona Lasota - Psycholog Warszawa Ursus"
        />
        <Masthead>
          <Masthead.Head>{TITLE}</Masthead.Head>
        </Masthead>
        <FeatureLarge ref={this.scrollElementRef}>
          <FeatureLarge.Content>
            <AboutFeatureLargeHeader>Edukacja</AboutFeatureLargeHeader>
            <AboutFeatureLargeBody>
              Jestem psychologiem i certyfikowanym psychoterapeutą
              poznawczo&#8209;behawioralnym. Ukończyłam pięcioletnie studia
              magisterskie na kierunku psychologia na Uniwersytecie Warszawskim
              ze specjalizacją terapia rodzin i małżeństw. Ukończyłam 4 letnie
              szkolenie w zakresie terapii poznawczo&#8209;behawioralnej w
              Szkole Psychoterapii Centrum CBT, rekomendowanej przez Polskie
              Towarzystwo Terapii Poznawczej i Behawioralnej (PTTPB). Stale
              poszerzam zakres swojej wiedzy uczestnicząc w szkoleniach i
              warsztatach. Swoją pracę poddaje regularnej superwizji.
            </AboutFeatureLargeBody>
          </FeatureLarge.Content>
          <AboutFeatureLargeImage src={graduation} alt="Edukacja" />
        </FeatureLarge>

        <FeatureLarge>
          <AboutFeatureLargeImage src={ether} alt="Doświadczenie" />
          <FeatureLarge.Content>
            <AboutFeatureLargeHeader>Doświadczenie</AboutFeatureLargeHeader>
            <AboutFeatureLargeBody>
              Jestem współzałożycielem{' '}
              <Link to="https://www.dobra-przestrzen.pl">
                centrum psychologicznego Dobra Przestrzeń
              </Link>
              .<br /> Od 5 lat współpracuję z{' '}
              <Link to="http://sot.ostrowiec.pl">
                Świętokrzyskim Ośrodkiem Terapii
              </Link>
              , gdzie zajmuję się prowadzeniem terapii oraz poradnictwem w
              Poradni Psychologicznej, Poradni Zdrowia Psychicznego oraz Zespole
              Leczenia Środowiskowego. Doświadczenie zawodowe zdobywałam również
              współpracując z Poradnią Zdrowia Psychicznego z oddziałami w
              Warszawie i Legionowie.
            </AboutFeatureLargeBody>
          </FeatureLarge.Content>
        </FeatureLarge>

        <FeatureLarge>
          <FeatureLarge.Content>
            <AboutFeatureLargeHeader>Komu pomagam?</AboutFeatureLargeHeader>
            <AboutFeatureLargeBody>
              Pracuję z młodzieżą i osobami dorosłymi, głównie w zakresie:
              zaburzeń lękowych, nieśmiałości, depresji, nerwic, problemów w
              relacjach, zaburzeń adaptacyjnych, problemów związanych z niskim
              poczuciem wartości. Prowadzę również terapię par i małżeństw,
              które przeżywają kryzys w związku oraz dla tych, którzy pragną
              takich kryzysów uniknąć. W terapii towarzyszę również tym
              wszystkim, którzy potrzebują zmiany, chcą rozwijać swoją
              osobowość, żyć pełniej, bardziej świadomie, pragną zwiększyć swoją
              zdolność do satysfakcjonującego życia.
            </AboutFeatureLargeBody>
          </FeatureLarge.Content>
          <AboutFeatureLargeImage src={highFive} alt="Pomoc" />
        </FeatureLarge>

        <Cta>
          <Cta.Head>Zapisz się na wizytę</Cta.Head>
          <Cta.Text>Zacznij od siebie</Cta.Text>
          <Link to="/kontakt">
            <Button px={4} py={3}>
              Skontaktuj się
            </Button>
          </Link>
        </Cta>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
}

const AboutHero = styled(Hero)`
  margin-bottom: 3rem;
`

const AboutFeatureLargeImage = styled.img`
  width: 70%;
`

const AboutFeatureLargeBody = styled(FeatureLarge.Body)`
  font-size: ${between('14px', '16px')};
`

const AboutFeatureLargeHeader = styled(FeatureLarge.Header)`
  font-size: ${between('20px', '28px')};
  margin-bottom: 1rem;
`

export default AboutPage

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    heroImage: file(relativePath: { eq: "ilona-lasota.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
