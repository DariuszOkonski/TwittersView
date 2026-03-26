import React from 'react';
import ListItem from './ListItem/ListItem';
import { twitterAccounts } from '../../data/twitterAccounts';
import './ListWrapper.css';

const ListWrapper = () => {
  return (
    <ul className='listWrapper__wrapper'>
      {twitterAccounts.map((item) => (
        <ListItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default ListWrapper;
