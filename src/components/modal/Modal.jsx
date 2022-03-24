import React, { useEffect, useRef } from 'react'
import './modal.css';
import { motion } from 'framer-motion';
const Modal = ({isModal,setIsModal,modalImage,setModalImage}) => {
    const modalRef = useRef();
    useEffect(() => {
        const getClickOutside = (e) => {
            if(isModal && e.target === modalRef.current){
                setIsModal(false);
                setModalImage('');
            }
        }
        window.addEventListener('click',getClickOutside);

        return () => {
            window.removeEventListener('click',getClickOutside)
        }
    },[isModal,setIsModal,setModalImage]);
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:"0.35"}}}
    transition={{duration:"0.75",easings:"easeInOut"}}
    className="modal-container" ref={modalRef}>
        <button className="close-btn" onClick={() => {
            setIsModal(false);
            setModalImage('');
        }}>X</button>
        
        <motion.img 
        initial={{y:"-100%"}}
        animate={{y:"0%"}}
        exit={{y:"-100%",transition:{duration:"0.35"}}}
        transition={{type:"spring",stiffness:"100",duration:"0.75"}}
        src={modalImage} alt="car"/>

    </motion.section>
  )
}

export default Modal