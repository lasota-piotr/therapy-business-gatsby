import styled from 'styled-components'
import LinkSmart from './LinkSmart'

const LinkPlain = styled(LinkSmart)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default LinkPlain
