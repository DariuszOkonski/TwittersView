import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src={logoImage} alt='FavNote logo' />
      <HeaderNavigation />
      <Button secondary>new item</Button>
    </header>
  );
};

export default Header;
