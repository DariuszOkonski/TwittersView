import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const ListWrapper = ({ items }) => {
  return (
    <React.Fragment>
      {items.length ? (
        <ul className={styles.wrapper}>
          {items.map((item) => (
            <ListItem key={crypto.randomUUID()} {...item} />
          ))}
        </ul>
      ) : (
        <h1 className={styles.noItems}>
          There's nothing here yet, please add some items!
        </h1>
      )}
    </React.Fragment>
  );
};

export default ListWrapper;
