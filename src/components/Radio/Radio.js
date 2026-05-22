import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ id, checked, changeFn, children }) => {
  return (
    <div className={styles.wrapper}>
      <input type='radio' id={id} checked={checked} onChange={changeFn} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Radio;
