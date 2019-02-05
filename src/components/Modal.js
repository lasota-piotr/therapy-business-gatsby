import React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import { useTransition } from 'react-spring'
import '@reach/dialog/styles.css'

const Modal = ({ children, showModal, closeHandle }) => {
  const transitions = useTransition({
    from: { opacity: 0, y: -300 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10000 },
  })
  return (
    showModal && (
      <DialogOverlay style={{ opacity: transitions.opacity }}>
        <DialogContent
          style={{
            transform: `translate3d(0px, ${transitions.y}px, 0px)`,
            border: '4px solid hsla(0, 0%, 0%, 0.5)',
            borderRadius: 10,
          }}
        >
          <button className="close-button" onClick={closeHandle}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          {children}
        </DialogContent>
      </DialogOverlay>
    )
  )
}

export default Modal
