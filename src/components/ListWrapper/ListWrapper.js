import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = () => {
  return (
    <ul className='listWrapper__wrapper'>
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default ListWrapper;
