import styled from 'styled-components'
import { FaMap } from 'react-icons/fa'
import React from 'react'
import LazyLoad from './LazyLoad'

const ContactMapFull = ({ className, height, ...restProps }) => (
  <ContactMapFullWrapper className={className} height={height}>
    <ContactMapFullIcon height={height} />
    <LazyLoad>
      <ContactMapFullIframe {...restProps} height={height} />
    </LazyLoad>
  </ContactMapFullWrapper>
)

const ContactMapFullWrapper = styled.div`
  background-color: #f4f4f4;
  height: ${({ height }) => height}px;
  position: relative;
`

const ContactMapFullIcon = styled(FaMap)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: ${({ height }) => height * 0.3}px;
  color: #dcdcdc;
`

const ContactMapFullIframe = styled.iframe`
  width: 100%;
  border: 0;
  position: relative;
  z-index: 1;
`

export default ContactMapFull
