import React from 'react';
import './Modal.css';
import { color } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal_overlay'>
            <div className='modal_content'>
                <button className='modal_close_button' style={{color:"red"}} onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;