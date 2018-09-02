import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Toggle from 'react-toggled'
import { FaBars, FaTimes } from 'react-icons/fa'
import media from '../styleUtils/media'
import Button from './Button'
import LinkPlain from './LinkPlain'

const activeStyle = {
  opacity: 0.7,
}

const Menu = () => {
  return (
    <MenuContainer>
      <Toggle>
        {({ on, getTogglerProps, setOff }) => (
          <>
            <MenuOpenButton {...getTogglerProps()} />
            <MenuContent isOn={on}>
              <MenuCloseButton onClick={setOff} />
              <MenuLink activeStyle={activeStyle} to="/">
                Strona główna
              </MenuLink>
              <MenuLink activeStyle={activeStyle} to="/o-mnie">
                O mnie
              </MenuLink>
              {/* TODO: ENABLE BLOG */}
              {/*<MenuLink activeStyle={activeStyle} to="/blog">*/}
                {/*Blog*/}
              {/*</MenuLink>*/}
              <MenuLink activeStyle={activeStyle} to="/cennik">
                Cennik
              </MenuLink>

              <Link to="/kontakt">
                <MenuButton>Kontakt</MenuButton>
              </Link>
            </MenuContent>
          </>
        )}
      </Toggle>
    </MenuContainer>
  )
}

const MenuOpenCloseButtonContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 1.3rem;
  display: none;
  ${media.tablet`
    display: inline-block;
  `};
`

const MenuCloseButtonContainer = MenuOpenCloseButtonContainer.extend`
  margin-bottom: 1rem;
  margin-left: auto;
`

const MenuOpenButton = props => (
  <MenuOpenCloseButtonContainer {...props}>
    <FaBars />
  </MenuOpenCloseButtonContainer>
)

const MenuCloseButton = props => (
  <MenuCloseButtonContainer {...props}>
    <FaTimes />
  </MenuCloseButtonContainer>
)

const MenuButton = Button.extend`
  margin-left: 1rem;
  ${media.tablet`
    margin-left: 0;
  `};
`

const MenuLink = styled(LinkPlain)`
  margin: 0 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: 0.3s ease;
  color: #252525;
  opacity: 0.5;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  &:hover {
    opacity: 1;
  }
  ${media.tablet`
    padding-bottom: 1rem;
  `};
`

const MenuContent = styled.div`
  ${media.tablet`
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.1);
    transform: translateX(100%);
    transition: all .3s ease-in-out;
    ${({ isOn }) =>
      isOn &&
      css`
        transform: none;
      `}
  `};
`

const MenuContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  height: 2.5rem;
`

export default Menu
