import React from 'react';
import ListItem from './ListItem/ListItem';
import { twitterAccounts } from '../../data/twitterAccounts';
import './ListWrapper.css';

const ListWrapper = () => {
  return (
    <ul className='listWrapper__wrapper'>
      {twitterAccounts.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          description={item.description}
          image={item.image}
          twitterLink={item.twitterLink}
        />
      ))}
    </ul>
  );
};

export default ListWrapper;
