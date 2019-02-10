import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import media from '../styleUtils/media'

const Container = styled.div`
  width: 100%;
  padding-right: ${({ theme }) => theme.containerPaddingHorizontal};
  padding-left: ${({ theme }) => theme.containerPaddingHorizontal};
  margin-right: auto;
  margin-left: auto;

  ${({ width }) =>
    width === 'small'
      ? css`
          max-width: 764px;
        `
      : css`
          max-width: 1140px;
          ${media.tablet`max-width: 720px`};
          ${media.giant`
        max-width: 960px`};
        `};
`

Container.propTypes = {
  width: PropTypes.oneOf(['small', 'normal']),
}

Container.defaultProps = {
  width: 'normal',
}

export default Container
