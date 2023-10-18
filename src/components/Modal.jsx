import React from 'react'

function Modal({selectedImage, setSelectedImg}) {
  const handleModalClose = (e) => {
    if(e.target.classList.contains('backdrop'))
    setSelectedImg(null);
  }
  return (
    <div className='backdrop' onClick={handleModalClose}>
      <img src={selectedImage} alt="modal image" />
    </div>
  )
}

export default Modal
