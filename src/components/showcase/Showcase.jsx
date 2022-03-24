import React, { useState } from 'react'
import './showcase.css';
import {images} from '../../data';
import Modal from '../modal/Modal';
import { AnimatePresence } from 'framer-motion';
const Showcase = () => {
    const [isModal,setIsModal] = useState(false);
    const [modalImage,setModalImage] = useState('');
  return (
    <section className="showcase">
        {images.length > 0 && images.map(image => (
            <img 
            src={image.url} 
            key={image.id} alt="car"
            onClick={() => {
                setIsModal(true);
                setModalImage(image.url);
            }}
            />
        ))}
        <AnimatePresence>
            {isModal && (
                <Modal isModal={isModal} setIsModal={setIsModal} modalImage={modalImage} setModalImage={setModalImage}/>
            )}
        </AnimatePresence>
    </section>

  )
}

export default Showcase