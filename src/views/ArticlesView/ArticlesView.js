import React from 'react';
import AppContext from '../../context';
import ListWrapper from '../../components/List/List';

const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => <ListWrapper items={context.article} />}
    </AppContext.Consumer>
  );
};

export default ArticlesView;
