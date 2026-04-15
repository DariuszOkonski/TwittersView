import React from 'react';
import styles from './Form.module.scss';

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form className={styles.form} onSubmit={submitFn}>
      <div className={styles.item}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder=' '
          maxLength='30'
        />
        <label htmlFor='name'>Name</label>
        <div className={styles.itemBar} />
      </div>
      <div className={styles.item}>
        <input type='text' name='link' id='link' placeholder=' ' />
        <label htmlFor='link'>Link</label>
        <div className={styles.itemBar} />
      </div>
      <div className={styles.item}>
        <input type='text' name='image' id='image' placeholder=' ' />
        <label htmlFor='image'>Image</label>
        <div className={styles.itemBar} />
      </div>
      <div className={styles.item}>
        <textarea name='description' id='description' placeholder=' ' />
        <label htmlFor='description'>Description</label>
        <div className={styles.itemBar} />
      </div>
      <button className={styles.button} type='submit'>
        add new item
      </button>
    </form>
  </div>
);

export default Form;
