import React from 'react';
import AppContext from '../../context';
import ListWrapper from '../../components/List/List';

const TwittersView = () => {
  return (
    <AppContext.Consumer>
      {(context) => <ListWrapper items={context.twitter} />}
    </AppContext.Consumer>
  );
};

export default TwittersView;
