import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkPlain = styled(Link)`
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export default LinkPlain
