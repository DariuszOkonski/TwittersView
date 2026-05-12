import React from 'react';
import styles from './Form.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Title from '../../Title/Title';

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form autoComplete='off' className={styles.form} onSubmit={submitFn}>
      <Input tag='input' name='name' label='Name' maxLength={30} />
      <Input tag='input' name='link' label='Twitter Link' />
      <Input tag='input' name='image' label='Image' />
      <Input tag='textarea' name='description' label='Description' />

      <Button>add new item</Button>
    </form>
  </div>
);

export default Form;
