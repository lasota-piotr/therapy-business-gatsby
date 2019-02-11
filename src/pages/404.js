import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import notFound from '../assets/404.svg'

import { TITLE_SUFFIX } from '../constants/constants'

import LinkSmart from '../components/LinkSmart'
import FeatureLarge from '../components/FeatureLarge'

const TITLE = '404'

function NotFoundPage() {
  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        title={`${TITLE} | ${TITLE_SUFFIX}`}
      />

      <NotFoundPageWrapper>
        <FeatureLarge css={{margin: 0}}>
          <NotFoundPageImg src={notFound} aria-hidden="true" />
          <FeatureLarge.Content>
            <FeatureLarge.Header>Nie znaleziono strony</FeatureLarge.Header>
            <FeatureLarge.Body>
              <LinkSmart to="/">Wróć na stonę główną</LinkSmart>
            </FeatureLarge.Body>
          </FeatureLarge.Content>
        </FeatureLarge>
      </NotFoundPageWrapper>
    </Layout>
  )
}

const NotFoundPageImg = styled.img`
  max-width: 400px;
  min-width: 280px;
`

const NotFoundPageWrapper = styled.main`
  height: 90vh;
  display: grid;
  align-items: center;
  justify-items: center;
`

export default NotFoundPage
