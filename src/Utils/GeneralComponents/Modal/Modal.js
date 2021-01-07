import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'
const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null
  
  // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
  // use this component inside our React tree
  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="modal-box">
        <button className="closeButtonModal" onClick={closeModal}>X</button>
        {children}
      </div>
    </div>,
    domEl
  )
})

export default Modal