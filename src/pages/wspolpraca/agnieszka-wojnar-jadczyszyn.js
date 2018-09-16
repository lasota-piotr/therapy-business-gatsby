import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import Masthead from '../../components/Masthead'
import FeatureLarge from '../../components/FeatureLarge'
import LinkFeature from '../../components/LinkFeature'
import media from '../../styleUtils/media'
import Cta from '../../components/Cta'
import LazyLoad from '../../components/LazyLoad'
import ContactMapFull from '../../components/ContactMapFull'
import Link from '../../components/Link'
import CooperationPageOneImg from '../../components/CooperationPageOneImage'

const TITLE = 'Agnieszka Wojnar-Jadczyszyn'

const CooperationPageOne = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        // meta={[{ name: 'description', content: siteDescription }]}
        title={`${TITLE} | Psycholog psychoterapeuta poznawczo-behawioralny`}
      />
      <Masthead>
        <Masthead.Head>{TITLE}</Masthead.Head>
        <Masthead.Text>
          Psycholog psychoterapeuta poznawczo-behawioralny
        </Masthead.Text>
      </Masthead>

      <FeatureLarge>
        <FeatureLarge.Content>
          <FeatureLarge.Header>O mnie</FeatureLarge.Header>
          <FeatureLarge.Body>
            <p>
              Jestem psychologiem i psychoterapeutą poznawczo-behawioralnym w
              trakcie certyfikacji. Ukończyłam Wydział Psychologii Uniwersytetu
              Marii Curie-Skłodowskiej w Lublinie, specjalność: psychologia
              kliniczna i neuropsychologia. Obecnie jestem w trakcie 4-letniego
              szkolenia w zakresie psychoterapii poznawczo – behawioralnej w
              Centrum CBT w Warszawie akredytowanego przez Polskie Towarzystwo
              Terapii Poznawczej i Behawioralnej, pogłębiając swoją wiedzę
              uczestniczę również w szkoleniach z Terapii Schematu, która
              integruje różne podejścia terapeutyczne i jest skuteczna m.in. w
              leczeniu zaburzeń osobowości.
            </p>
            <p>
              Doświadczenie kliniczne zdobywałam w Poradni Zdrowia Psychicznego
              dla Dorosłych SZPZLO Warszawa-Ochota, Klinice Vertimed w Warszawie
              na Oddziale Dziennym Zaburzeń Nerwicowych, Klinice Psychiatrii
              Akademii Medycznej w Lublinie i Lubelskim Stowarzyszeniu Zdrowia
              Psychicznego &quot;Serce&quot;. Obecnie pracuję w Poradni Zdrowia
              Psychicznego dla Dorosłych przy Szpitalu Nowowiejskim.
            </p>
            <CooperationPageOneSubTitle>
              Prowadzę terapię osób dorosłych i młodzieży zmagających się z:
            </CooperationPageOneSubTitle>
            <ul>
              <li>zaburzeniami nastroju (depresja, obniżony nastrój),</li>
              <li>
                zaburzeniami lękowymi (ataki paniki, lęk o zdrowie, fobie,
                zaburzenia obsesyjno- kompulsywne),
              </li>
              <li>trudnościami w relacjach z innymi ludźmi,</li>
              <li>zaburzeniami osobowości,</li>
              <li>dolegliwościami psychosomatycznymi,</li>
              <li>trudnościami adaptacyjnymi,</li>
              <li>stresem pourazowym</li>
              <li>kryzysem życiowym,</li>
              <li>niską samooceną.</li>
            </ul>
            <p>Swoją pracę poddaję regularnej superwizji.</p>
            {/*<LinkFeature to="/o-mnie">Dowiedz się więcej »</LinkFeature>*/}
          </FeatureLarge.Body>
        </FeatureLarge.Content>
        <CooperationPageOneImg
          alt="Agnieszka Wojnar‑Jadczyszyn - Psycholog Warszawa Włochy, Ursus"
          fluid={data.aboutImage.childImageSharp.fluid}
        />
      </FeatureLarge>
      <section>
        <CooperationCta>
          <Cta.Head>Kontakt</Cta.Head>
          <Cta.Text>Skontaktuj się i umów się na wizytę</Cta.Text>
        </CooperationCta>
        <FeatureLarge stretchChildren>
          <FeatureLarge.Content order="normal">
            <FeatureLarge.Header>Informacje kontaktowe</FeatureLarge.Header>
            <FeatureLarge.Body>
              <p>
                <strong>Nr telefonu: </strong>
                <Link target="_self" rel="" to="tel:+48665400815">
                  665-400-815
                </Link>
              </p>
              <p>
                <strong>Email: </strong>
                <Link
                  target="_self"
                  rel=""
                  to="mailto:a.wojnar.jadczyszyn@gamil.com"
                >
                  a.wojnar.jadczyszyn@gamil.com
                </Link>
              </p>
              <p>
                ul. Potrzebna 35/11
                <br />
                Warszawa, Włochy
                <br />
                02-448
              </p>
            </FeatureLarge.Body>
          </FeatureLarge.Content>

          <LazyLoad>
            <ContactMapFull
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.829366788377!2d20.917154215631697!3d52.21014826689819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471934caccc7e34d%3A0x8dac5ce052091a6d!2sPotrzebna+35%2C+00-001+Warszawa!5e0!3m2!1sen!2spl!4v1537125654013"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            />
          </LazyLoad>
        </FeatureLarge>
      </section>
    </Layout>
  )
}

const CooperationCta = styled(Cta)`
  padding-bottom: 0;
`

const CooperationPageOneSubTitle = styled.h4`
  font-weight: 500;
  margin-top: 2.5em;
`

export default CooperationPageOne

export const pageQuery = graphql`
  query cooperationOneQuery {
    aboutImage: file(relativePath: { eq: "agnieszka-wojnar-jadczyszyn.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
