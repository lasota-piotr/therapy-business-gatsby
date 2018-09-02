import styled from 'styled-components'
import { between } from 'polished'
import Link from './Link'

const LinkFeature = styled(Link)`
  font-weight: 700;
  font-size: ${between('11px', '12px')};
`

export default LinkFeature
