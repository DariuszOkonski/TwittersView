import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import { twitterAccounts } from './data/twitterAccounts';

const initialStateItems = [...twitterAccounts];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  render() {
    return (
      <div className='wrapper'>
        <ListWrapper items={this.state.items} />
      </div>
    );
  }
}

export default App;
