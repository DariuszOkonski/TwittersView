import React from 'react';
import AppContext from '../../context';
import ListWrapper from '../../components/List/List';

const NotesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => <ListWrapper items={context.note} />}
    </AppContext.Consumer>
  );
};

export default NotesView;
