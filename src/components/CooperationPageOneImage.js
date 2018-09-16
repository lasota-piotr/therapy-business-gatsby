import styled from 'styled-components'
import FeatureLarge from './FeatureLarge'
import media from '../styleUtils/media'

const CooperationPageOneImg = styled(FeatureLarge.Img)`
  width: 80%;
  margin: 0 auto;
  ${media.phone`
    width: 100%;
  `}
`

export default CooperationPageOneImg
