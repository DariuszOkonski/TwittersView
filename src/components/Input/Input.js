import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label, maxLength }) => {
  return (
    <div className={styles.item}>
      <Tag
        required
        className={Tag === 'textarea' ? styles.textarea : styles.input}
        type='text'
        name={name}
        id={name}
        placeholder=' '
        maxLength={maxLength}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.itemBar} />
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};
Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
};

export default Input;
