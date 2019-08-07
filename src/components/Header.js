import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from 'rebass'
import { themeGet } from '@styled-system/theme-get'
import { ROOT_PATH } from '../constants/constants'
import logo from '../assets/twoj-terapeuta.svg'
import Menu from './Menu'
import Container from './Container'
import LinkPlain from './LinkPlain'

const headingStyles = css`
  font-size: 22px;
  margin-bottom: 0;
`

const HeadingTextH1 = styled.h1`
  ${headingStyles};
`

const HeadingTextH3 = styled.h3`
  ${headingStyles};
`

const HeadingLink = styled(LinkPlain)`
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
`

const Heading = ({ isRoot, children }) => {
  if (isRoot) {
    return <HeadingTextH1>{children}</HeadingTextH1>
  }

  return <HeadingTextH3>{children}</HeadingTextH3>
}

const Header = ({ location }) => {
  const isRoot = location.pathname === ROOT_PATH

  return (
    <Box
      as="nav"
      css={css`
        position: sticky;
        top: 0;
        z-index: 2;
        box-shadow: ${themeGet('shadows.small')};
        background-color: ${themeGet('colors.white')};
      `}
    >
      <NavContainer>
        <HeadingLink to="/">
          <Logo
            height="48"
            width="48"
            src={logo}
            alt="Ilona Lasota - Psycholog Warszawa Ursus - logo"
          />
          <Heading isRoot={isRoot}>
            <HeadingAccentText>Twój terapeuta</HeadingAccentText> <br />
            <HeadingMainText>Ilona Lasota</HeadingMainText>
          </Heading>
        </HeadingLink>
        <Menu />
      </NavContainer>
    </Box>
  )
}

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
`

const HeadingAccentText = styled.span`
  font-size: 0.9rem;
  color: #666;
`

const HeadingMainText = styled.span`
  color: #333;
`

const Logo = styled.img`
  margin-right: 0.75rem;
`

export default Header
