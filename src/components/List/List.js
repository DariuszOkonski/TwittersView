import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const ListWrapper = ({ items }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <ListItem key={crypto.randomUUID()} {...item} />
      ))}
    </ul>
  );
};

export default ListWrapper;
