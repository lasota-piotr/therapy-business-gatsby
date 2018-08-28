import React from 'react'
import styled, { css } from 'styled-components'
import { ROOT_PATH } from '../constants/constants'
import Menu from './Menu'
import Container from './Container'
import LinkPlain from './LinkPlain'

const headingStyles = css`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  margin-bottom: 0;
`

const HeadingTextH1 = styled.h1`
  ${headingStyles};
`

const HeadingTextH3 = styled.h3`
  ${headingStyles};
`

const HeadingLink = LinkPlain.extend`
  color: #333;
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
    <nav>
      <NavContainer>
        <Heading isRoot={isRoot}>
          <HeadingLink to="/">Ilona Lasota</HeadingLink>
        </Heading>
        <Menu />
      </NavContainer>
    </nav>
  )
}

const NavContainer = Container.extend`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
`

export default Header
