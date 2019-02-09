import React from 'react'
import { Button as ButtonBase } from 'rebass'
import { withTheme } from 'styled-components'

const Button = props => (
  <ButtonBase
    {...props}
    fontWeight="bold"
    fontSize={props.theme.fontSizes[1]}
    css={{ textTransform: 'uppercase' }}
  />
)

export default withTheme(Button)
