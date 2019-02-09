import React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'
import styled from 'styled-components'

const Modal = ({ children, showModal, closeHandle }) => {
  return (
    showModal && (
      <DialogOverlayStyled onDismiss={closeHandle}>
        <DialogContentStyled>
          <div css={`
            position: absolute;
            top: 0.25rem;
            right: 0.5rem;
           `}>
            <CloseButton onClick={closeHandle} />
          </div>
          {children}
        </DialogContentStyled>
      </DialogOverlayStyled>
    )
  )
}

const DialogOverlayStyled = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 1rem;
  }
`

const DialogContentStyled = styled(DialogContent)`
  &[data-reach-dialog-content] {
    width: 100%;
    max-width: 600px;
    margin: 2vh auto 30vh;
    border-radius: 3px;
    box-shadow: 0 1px 7px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
`

const CloseButton = props => (
  <button
    {...props}
    css={`
      background-color: transparent;
      border: none;
      font-size: 1.75rem;
      line-height: 1;
    `}
  >
    <VisuallyHidden>Zamknij</VisuallyHidden>
    <span aria-hidden css={`
      display: block;
      height: 100%;
    `}>×</span>
  </button>
)

export default Modal
