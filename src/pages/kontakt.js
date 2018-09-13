import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import Masthead from '../components/Masthead'
import FeatureLarge from '../components/FeatureLarge'
import ContactForm from '../components/ContactFrom'
import Link from '../components/Link'
import LinkFeature from '../components/LinkFeature'
import Cta from '../components/Cta'
import LazyLoad from '../components/LazyLoad'

const PricingPage = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Masthead>
        <Masthead.Head>Kontakt</Masthead.Head>
        <Masthead.Text>
          Psycholog i psychoterapeuta - Warszawa, Włochy
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
              ul. Potrzebna 35/11
              <br />
              Warszawa, Włochy
              <br />
              02-448
            </p>
          </FeatureLarge.Body>
        </FeatureLarge.Content>
        <ContactForm />
      </ContactFeatureLarge>
      <LazyLoad>
        <ContactMapFullWithMargin
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8295476809885!2d20.917154215795918!3d52.21014497975672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471935a5f74da771%3A0x97e6d82a5a62080!2sPsychoterapeuta+Ilona+Lasota+-+Prywatny+Gabinet+Psychoterapii!5e0!3m2!1sen!2spl!4v1536359049467"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen
        />
      </LazyLoad>
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

          <LazyLoad>
            <ContactMapFull
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.7907906421033!2d21.40112931577683!3d50.94608197954676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471809a9e5ba590f%3A0xbb8a02c84d61d40a!2zxZp3acSZdG9rcnp5c2tpIE_Fm3JvZGVrIFRlcmFwaWk!5e0!3m2!1sen!2spl!4v1535901185359"
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

const ContactMapFull = styled.iframe`
  width: 100%;
  border: 0;
`

const ContactMapFullWithMargin = styled(ContactMapFull)`
  margin-bottom: 6.5rem;
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
