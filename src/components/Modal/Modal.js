import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={closeModalFn}>close me</button>
      <Form submitFn={() => console.log('submit')} />
    </div>
  );
};

export default Modal;
