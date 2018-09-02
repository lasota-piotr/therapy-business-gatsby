import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
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
    let { data, location } = this.props
    const siteTitle = get(data, 'site.siteMetadata.title')
    const siteDescription = get(data, 'site.siteMetadata.description')
    return (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'pl' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <AboutHero
          imageFluid={data.heroImage.childImageSharp.fluid}
          position="left"
          size="large"
          headerText="Ilona Lasota"
          subHeaderText="Psycholog i psychoterapeuta poznawczo&#8209;behawioralny w trakcie procesu certyfikacji"
          contentChildren={
            <Button px={4} py={3} onClick={this.handleScrollToElement}>
              Dowiedz się więcej
            </Button>
          }
        />
        <FeatureLarge innerRef={this.scrollElementRef}>
          <FeatureLarge.Content>
            <AboutFeatureLargeHeader>Edukacja</AboutFeatureLargeHeader>
            <AboutFeatureLargeBody>
              Jestem psychologiem i psychoterapeutą poznawczo-behawioralnym w
              trakcie procesu certyfikacji. Ukończyłam pięcioletnie studia
              magisterskie na kierunku psychologia na Uniwersytecie Warszawskim
              ze specjalizacją terapia rodzin i małżeństw. Obecnie jestem na
              ostatnim roku 4-letniego szkolenia w zakresie terapii
              poznawczo-behawioralnej w Szkole Psychoterapii Centrum CBT,
              rekomendowanej przez Polskie Towarzystwo Terapii Poznawczej i
              Behawioralnej(PTTPB).
            </AboutFeatureLargeBody>
          </FeatureLarge.Content>
          <AboutFeatureLargeImage src={graduation} alt="edukacja" />
        </FeatureLarge>

        <FeatureLarge>
          <AboutFeatureLargeImage src={ether} alt="edukacja" />
          <FeatureLarge.Content>
            <AboutFeatureLargeHeader>Doświadczenie</AboutFeatureLargeHeader>
            <AboutFeatureLargeBody>
              Od 4 lat współpracuję z Świętokrzyskim Ośrodkiem Terapii, gdzie
              zajmuję się prowadzeniem terapii oraz poradnictwem w Poradni
              Psychologicznej, Poradni Zdrowia Psychicznego oraz Zespole
              Leczenia Środowiskowego. W swojej pracy terapeutycznej posługuję
              się głównie podejściem poznawczo-behawioralnym oraz terapią
              schematu.
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
          <AboutFeatureLargeImage src={highFive} alt="pomoc" />
        </FeatureLarge>

        <Cta>
          <Cta.Head>Zacznij od siebie</Cta.Head>
          <Cta.Text>
            Zapisz się na wizytę
          </Cta.Text>
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
