import { motion } from 'framer-motion';
import React from 'react'

function Modal({ selectedImage, setSelectedImg }) {
  const handleModalClose = (e) => {
    if (e.target.classList.contains('backdrop'))
      setSelectedImg(null);
  }
  return (
    <motion.div className='backdrop' 
     onClick={handleModalClose}
     initial={{opacity:0}}
     animate={{opacity: 1}}
     >
      <motion.img src={selectedImage} 
        alt="modal image" 
        initial={{y:"-100vh"}}
        animate={{y:0}}
      />
    </motion.div>
  )
}

export default Modal
