import React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'

const Modal = ({ children, showModal, closeHandle }) => {
  return (
    <DialogOverlay
      style={{ background: 'hsla(0, 100%, 100%, 0.9)' }}
      isOpen={showModal}
    >
      <button className="close-button" onClick={closeHandle}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <DialogContent style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)' }}>
        {children}
      </DialogContent>
    </DialogOverlay>
  )
}

export default Modal
