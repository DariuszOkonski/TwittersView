import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <HeaderNavigation />
    </div>
  );
};

export default Header;
