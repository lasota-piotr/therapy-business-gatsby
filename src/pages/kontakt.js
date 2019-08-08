import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import FeatureLarge from '../components/FeatureLarge'
import ContactForm from '../components/ContactFrom'
import Link from '../components/Link'
import LinkFeature from '../components/LinkFeature'
import Cta from '../components/Cta'
import ContactMapFull from '../components/ContactMapFull'
import { TITLE_SUFFIX } from '../constants/constants'
import media from '../styleUtils/media'

const TITLE = 'Kontakt'
const DESCRIPTION =
  'Psycholog i psychoterapeuta - Warszawa Ursus. Umów się na wizytę 📞 737-449-022 - ul. Drzymały 18/24'

const PricingPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        meta={[{ name: 'description', content: DESCRIPTION }]}
        title={`${TITLE} | ${TITLE_SUFFIX}`}
      />
      <Masthead>
        <Masthead.Head>{TITLE}</Masthead.Head>
        <Masthead.Text>
          Psycholog i psychoterapeuta - Warszawa Ursus
        </Masthead.Text>
      </Masthead>
      <ContactFeatureLarge>
        <FeatureLarge.Content order="normal">
          <FeatureLarge.Header>
            Prywatny gabinet psychoterapeutyczny
            <br /> Ilona Lasota
          </FeatureLarge.Header>
          <FeatureLarge.Body>
            <p>
              <strong>Nr telefonu: </strong>
              <Link target="_self" rel="" to="tel:+48737449022">
                737-449-022
              </Link>
            </p>
            <p>
              ul. Drzymały 18/24
              <br />
              Warszawa, Ursus
              <br />
              02-495
            </p>
          </FeatureLarge.Body>
        </FeatureLarge.Content>
        <ContactForm />
      </ContactFeatureLarge>

      <ContactMapFullWithMargin
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21535.395632521202!2d20.88825869233406!3d52.20062165334507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471935530fc963c5%3A0xfbdd07908a12c7ea!2sDobra+Przestrze%C5%84+%E2%80%94+psychoterapia%2C+ruch+i+rozw%C3%B3j!5e0!3m2!1sen!2spl!4v1562419625675!5m2!1sen!2spl"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen
      />

      <section>
        <ContactCta>
          <Cta.Head>Przyjmuję również w innych miejscach</Cta.Head>
          <Cta.Text>Zobacz pozostałe miejsca przyjmowania</Cta.Text>
        </ContactCta>
        <FeatureLarge stretchChildren>
          <FeatureLarge.Content order="normal">
            <FeatureLarge.Header>
              Świętokrzyski Ośrodek Terapii
            </FeatureLarge.Header>
            <FeatureLarge.Body>
              <p>
                ul. Os. Ogrody 10A/3U
                <br />
                Ostrowiec Świętokrzyski
                <br />
                27-400, świętokrzyskie
              </p>
              <p>
                <LinkFeature to="http://sot.ostrowiec.pl">
                  Więcej informacji
                </LinkFeature>
              </p>
            </FeatureLarge.Body>
          </FeatureLarge.Content>

          <ContactMapFull
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.7907906421033!2d21.40112931577683!3d50.94608197954676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471809a9e5ba590f%3A0xbb8a02c84d61d40a!2zxZp3acSZdG9rcnp5c2tpIE_Fm3JvZGVrIFRlcmFwaWk!5e0!3m2!1sen!2spl!4v1535901185359"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </FeatureLarge>
      </section>
    </Layout>
  )
}

const ContactMapFullWithMargin = styled(ContactMapFull)`
  margin-bottom: 6.5rem;
  ${media.tablet`
    margin-bottom: 2.5rem;
  `};
`

const ContactCta = styled(Cta)`
  padding-bottom: 0;
`

const ContactFeatureLarge = styled(FeatureLarge)`
  margin-bottom: 0;
`

export default PricingPage

export const pageQuery = graphql`
  query kontaktkQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
